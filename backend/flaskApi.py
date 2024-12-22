from flask import Flask, jsonify, request
import sqlite3

app = Flask(__name__)

def get_data(language):
    conn = sqlite3.connect('myData.db')
    cursor = conn.cursor()
    if language == "en":
        cursor.execute("SELECT * FROM myDataEN")
    elif language == "ar":
        cursor.execute("SELECT * FROM myDataAR")
    rows = cursor.fetchall()
    conn.close()
    result = [
        {"id": row[0], "link": row[1], "srcImg": row[2], "title": row[3], "description": row[4]}
        for row in rows
    ]
    return result

@app.route('/workInfoEN', methods=['GET'])
def workInfoEN():
    data = get_data("en")
    return jsonify(data)  

if __name__ == '__main__':
    app.run(debug=True)
