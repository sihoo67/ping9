# create_database.py
import sqlite3

conn = sqlite3.connect('reviews.db')
c = conn.cursor()

# 리뷰 테이블 생성
c.execute('''
CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    review TEXT,
    rating INTEGER
)
''')

conn.commit()
conn.close()
