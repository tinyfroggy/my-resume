import sqlite3

db = sqlite3.connect('myData.db')
cr = db.cursor()

def commit_and_close():
    """Connection To Database Is Closed"""
    db.commit()
    db.close()

input_message = """
What Do You Want To Do?
"s" => Show All Skills
"a" => Add New Skill
"d" => Delete A Skill
"u" => Update Skill Proficiency
"q" => Quit The App
"""

option = ["s", "a", "d", "u", "q"]

def show_data(ar_en):
    if ar_en == "ar":
        cr.execute("SELECT * FROM myDataAR")
    else:
        cr.execute("SELECT * FROM myDataEN")
    skills = cr.fetchall()
    if len(skills) == 0:
        print("No data found.")
    else:
        for skill in skills:
            print(f"ID: {skill[0]} | Link: {skill[1]} | ScrImg: {skill[2]} | Title: {skill[3]} | Description: {skill[4]}")

def add_data(ar_en):
    link = input("Enter Link: ").strip()
    srcImg = input("Enter srcImg: ").strip()
    title = input("Enter Title: ").strip()
    description = input("Enter Description: ").strip()

    if not all([link, srcImg, title, description]):
        print("All fields are required!")
        return

    if ar_en == "ar":
        cr.execute("INSERT INTO myDataAR (link, srcImg, title, description) VALUES (?, ?, ?, ?)", (link, srcImg, title, description))
    else:
        cr.execute("INSERT INTO myDataEN (link, srcImg, title, description) VALUES (?, ?, ?, ?)", (link, srcImg, title, description))
    db.commit()
    print("New data added successfully.")

def delete_data(ar_en):
    id_for_delete = input("Enter The ID: ").strip()
    if ar_en == "ar":
        cr.execute("DELETE FROM myDataAR WHERE id = ?", (id_for_delete,))
    else:
        cr.execute("DELETE FROM myDataEN WHERE id = ?", (id_for_delete,))
    db.commit()
    print("Data deleted successfully.")

def update_data(ar_en):
    id_for_update = input("Enter The ID: ").strip()
    link = input("Enter Link: ").strip()
    scrImg = input("Enter ScrImg: ").strip()
    title = input("Enter Title: ").strip()
    description = input("Enter Description: ").strip()

    if not all([id_for_update, link, scrImg, title, description]):
        print("All fields are required!")
        return

    if ar_en == "ar":
        cr.execute("UPDATE myDataAR SET link = ?, scrImg = ?, title = ?, description = ? WHERE id = ?", (link, scrImg, title, description, id_for_update))
    else:
        cr.execute("UPDATE myDataEN SET link = ?, scrImg = ?, title = ?, description = ? WHERE id = ?", (link, scrImg, title, description, id_for_update))
    db.commit()
    print("Data updated successfully.")

# Start the application loop
while True:
    chose = input(input_message).strip().lower()
    
    if chose == "q":
        print("Closing the app...")
        commit_and_close()
        break
    elif chose in option:
        ar_en = input("AR OR EN? ").strip().lower()
        if chose == "s":
            show_data(ar_en)
        elif chose == "a":
            add_data(ar_en)  
        elif chose == "d":
            delete_data(ar_en)
        elif chose == "u":
            update_data(ar_en)
    else:
        print("Invalid option. Please choose a valid one.")
