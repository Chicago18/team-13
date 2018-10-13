import psycopg2
import psycopg2.extras
from flask import Flask, jsonify, request

app = Flask(__name__, instance_relative_config=True)
app.config.from_object('config')  # default config
app.config.from_pyfile('config.py')  # specific instance config
conn = psycopg2.connect(**app.config['PSYCOPG2_CONFIG'])


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

@app.route('/company')
def get_company():
    cur = make_cursor()
    cur.execute("""SELECT * from company""")
    rows = cur.fetchall()
    return jsonify_rows(rows)


if __name__ == '__main__':
      app.run(host='127.0.0.1', port=8080)
