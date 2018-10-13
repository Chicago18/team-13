import psycopg2
import psycopg2.extras
from flask import Flask, jsonify

app = Flask(__name__)
conn = psycopg2.connect("dbname='unify' user='postgres' host='52.201.219.91' password='foobar'")


@app.route('/')
def hello_world():
    return 'Hello, World!'

def make_cursor():
    return conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
def jsonify_rows(rows):
    return jsonify([dict(row) for row in rows])

@app.route('/users')
def get_users():
    cur = make_cursor()
    cur.execute("""SELECT * from person""")
    rows = cur.fetchall()
    return jsonify_rows(rows)


@app.route('/documents')
def get_docs():
    cur = make_cursor()
    cur.execute("""SELECT * from doc""")
    rows = cur.fetchall()
    return jsonify_rows(rows)
def data():
    user = request.args.get('user')




@app.route('/company')
def get_company():
    cur = make_cursor()
    cur.execute("""SELECT * from company""")
    rows = cur.fetchall()
    return jsonify_rows(rows)


if __name__ == '__main__':
      app.run(host='127.0.0.1', port=8080)
