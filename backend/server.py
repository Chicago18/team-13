import psycopg2
from flask import Flask, jsonify

app = Flask(__name__)
conn = psycopg2.connect("dbname='unify' user='postgres' host='52.201.219.91' password='foobar'")


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/users')
def get_users():
    cur = conn.cursor()
    cur.execute("""SELECT * from person""")
    rows = cur.fetchall()
    return jsonify(rows)


if __name__ == '__main__':
      app.run(host='127.0.0.1', port=8080)
