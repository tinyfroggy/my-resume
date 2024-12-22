import sqlite3

con = sqlite3.connect('myData.db')

cur = con.cursor()

cur.execute("CREATE TABLE IF NOT EXISTS myDataEN (id INTEGER PRIMARY KEY, link TEXT, srcImg TEXT, title TEXT, description TEXT)")

cur.execute("CREATE TABLE IF NOT EXISTS myDataAR (id INTEGER PRIMARY KEY, link TEXT, srcImg TEXT, title TEXT, description TEXT)")

con.commit()
con.close()