# app.py
from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

def connect_db():
    return sqlite3.connect('reviews.db')

@app.route('/reviews', methods=['GET', 'POST'])
def reviews():
    conn = connect_db()
    c = conn.cursor()

    if request.method == 'POST':
        new_review = request.json
        c.execute('INSERT INTO reviews (username, review, rating) VALUES (?, ?, ?)',
                  (new_review['username'], new_review['review'], new_review['rating']))
        conn.commit()
        return jsonify(new_review), 201

    c.execute('SELECT * FROM reviews')
    all_reviews = c.fetchall()
    conn.close()
    return jsonify(all_reviews)

if __name__ == '__main__':
    app.run(debug=True)
