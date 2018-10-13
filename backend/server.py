import psycopg2
import psycopg2.extras
from flask import Flask, jsonify, request, abort
from flask_cors import CORS

app = Flask(__name__, instance_relative_config=True)
CORS(app)

app.config.from_object('config')  # default config
app.config.from_pyfile('config.py')  # specific instance config
conn = psycopg2.connect(**app.config['PSYCOPG2_CONFIG'])


@app.after_request
def allow_cors(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response


def make_cursor():
    return conn.cursor(cursor_factory=psycopg2.extras.DictCursor)


def jsonify_single_row(row):
    return jsonify(dict(row))


def jsonify_many_rows(rows):
    return jsonify([dict(row) for row in rows])


@app.route('/users', methods=['GET', 'POST'])
def post_users():
    if request.method == 'GET':
        cur = make_cursor()
        cur.execute("""SELECT * from person""")
        rows = cur.fetchall()
        return jsonify_many_rows(rows)

    elif request.method == 'POST':
        body = request.get_json()
        cur = make_cursor()
        cur.execute("""
            INSERT INTO person (lastname, firstname, email, dateofbirth, job_level, company)
            VALUES (%(lastname)s, %(firstname)s, %(email)s, %(dateofbirth)s, %(job_level)s, %(company)s)
            RETURNING user_id""", body)
        row = cur.fetchone()
        if row is None:
            return abort(404)
        user_id = row['user_id']
        return jsonify({'id': user_id})


@app.route('/documents', methods=['GET', 'POST'])
def post_doc():
    if request.method == 'GET':
        cur = make_cursor()
        cur.execute("""SELECT * from doc""")
        rows = cur.fetchall()
        return jsonify_many_rows(rows)

    elif request.method == 'POST':
        body = request.get_json()
        cur = make_cursor()
        cur.execute("""
            INSERT INTO doc (title, full_text, upld_by, href, doctype, description)
            VALUES (%(title)s, %(full_text)s, %(upld_by)s, %(href)s, %(doctype)s, %(description)s)
            RETURNING id""", body)
        row = cur.fetchone()
        if row is None:
            return abort(404)
        return jsonify({'id': row['id']})


@app.route('/documents/<int:id>')
def get_docs(id):
    cur = make_cursor()
    search = request.args.get('q')

    if search:
        cur.execute("""SELECT * FROM doc WHERE id = %s AND description LIKE '%' || %s || '%' LIMIT 1""", (id, search))
    else:
        cur.execute("""SELECT * from doc WHERE id = %s LIMIT 1""", (id,))

    rows = cur.fetchone()
    if rows is None:
        return abort(404)
    return jsonify_single_row(rows)


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
    return jsonify_many_rows(rows)


if __name__ == '__main__':
      app.run(host='127.0.0.1', port=8080)
