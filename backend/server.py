import psycopg2
import psycopg2.extras
from flask import Flask, jsonify, request

app = Flask(__name__)
app.config.from_object('config')  # default config
app.config.from_pyfile('config.py')  # specific instance config
conn = psycopg2.connect(**app.config['PSYCOPG2_CONFIG'])


def make_cursor():
    return conn.cursor(cursor_factory=psycopg2.extras.DictCursor)


def jsonify_rows(rows):
    return jsonify([dict(row) for row in rows])


@app.route('/users', methods=['GET', 'POST'])
def post_users():
    if request.method == 'GET':
        cur = make_cursor()
        cur.execute("""SELECT * from person""")
        rows = cur.fetchall()
        return jsonify_rows(rows)

    elif request.method == 'POST':
        body = request.get_json()
        cur = make_cursor()
        cur.execute("""
            INSERT INTO person (lastname, firstname, email, dateofbirth, job_level, company)
            VALUES (%(lastname)s, %(firstname)s, %(email)s, %(dateofbirth)s, %(job_level)s, %(company)s)
            RETURNING user_id""", body)
        row = cur.fetchone()
        user_id = row['user_id']
        return jsonify({'id': user_id})


@app.route('/documents', methods=['GET', 'POST'])
def post_doc():
    if request.method == 'GET':
        cur = make_cursor()
        cur.execute("""SELECT * from doc""")
        rows = cur.fetchall()
        return jsonify_rows(rows)

    elif request.method == 'POST':
        body = request.get_json()
        cur = make_cursor()
        cur.execute("""
            INSERT INTO doc (title, full_text, upld_by, href, doctype, description)
            VALUES (%(title)s, %(full_text)s, %(upld_by)s, %(href)s, %(doctype)s, %(description)s)
            RETURNING id""", body)
        row = cur.fetchone()
        return jsonify({'id': row['id']})


@app.route('/documents/:id')
def get_docs():
    cur = make_cursor()
    search = request.args.get('q')

    if search:
        cur.execute("""SELECT * FROM doc WHERE description LIKE '%' || %s || '%'""", (search,))
    else:
        cur.execute("""SELECT * from doc""")

    rows = cur.fetchall()

    return jsonify_rows(rows)


@app.route('/company', methods=['POST'])
def make_company():
    body = request.get_json()
    # fields: name, member_since, egr_lead
    cur = make_cursor()
    cur.execute("""INSERT INTO customer {id}, {name}, {egr_lead}""".format(**body))


def get_company():
    cur = make_cursor()
    cur.execute("""SELECT * from company""")
    rows = cur.fetchall()
    return jsonify_rows(rows)


if __name__ == '__main__':
      app.run(host='127.0.0.1', port=8080)
