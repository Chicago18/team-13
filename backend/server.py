import psycopg2
import psycopg2.extras
from flask import Flask, jsonify, request

app = Flask(__name__)
conn = psycopg2.connect("dbname='unify' user='postgres' host='52.201.219.91' password='foobar'")

def make_cursor():
    return conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
def jsonify_rows(rows):
    return jsonify([dict(row) for row in rows])

@app.route('/users', methods = ['POST'])
def post_users():
    body = request.get_json()
    #fields:lastname, firstname, email, dateofbirth, job_level, company, iden
    cur = make_cursor()
    cur.execute("""INSERT INTO person {lastname}, {firstname}, {email},
    {dateofbirth}, {job_level}, {company}, {iden}""").format(**body)

def get_users():
    cur = make_cursor()
    cur.execute("""SELECT * from person""")
    rows = cur.fetchall()
    return jsonify_rows(rows)


@app.route('/documents', methods =['POST'])
def post_doc():
    body = request.get_json()
    #fields: title, full_text,upld_by,href,doctype,description
    cur = make_cursor()
    cur.execute("""INSERT INTO doc {title}, {full_text}, {upld_by}, {href},
     {doctype},{description}""").format(**body)

def get_docs():
    cur = make_cursor()
    search = request.args.get('q')

    if search:
        cur.execute("""SELECT id FROM TAG_TABLE WHERE 'aaaaaaaa' LIKE '%' || tag_name || '%'""")
    else:
        cur.execute("""SELECT * from doc""")

    rows = cur.fetchall()


    return jsonify_rows(rows)


@app.route('/documents/:id')
def get_doc_by_id():
    cur = make_cursor()
    cur.execute("""SELECT * from doc where id = %d""")
    rows = cur.fetchone()
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
