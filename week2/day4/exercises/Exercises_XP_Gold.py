# part 1

users = {
    "soukaina": "1234",
    "omar": "pass123",
    "fatima": "hello"
}

logged_in = None

while True:
    action = input("Type 'login' or 'exit': ")

    if action == "exit":
        print("Bye!")
        break

    if action == "login":
        username = input("Enter username: ")
        password = input("Enter password: ")

        if username in users and users[username] == password:
            print("✅ You are now logged in")
            logged_in = username
            break
        else:
            print("❌ Invalid credentials")

# Part 2


if action == "signup":
    username = input("Choose a username: ")
    while username in users:  
        username = input("Username already exists, choose another: ")

    password = input("Choose a password: ")
    users[username] = password
    print("✅ Signup successful!")


import psycopg2
import bcrypt


conn = psycopg2.connect(
    dbname="authdb",
    user="postgres",
    password="yourpassword",
    host="localhost",
    port="5432"
)
cur = conn.cursor()

def signup(username, password):
    hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
    try:
        cur.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (username, hashed.decode()))
        conn.commit()
        print("✅ Signup successful!")
    except Exception as e:
        print("⚠️ Error:", e)
        conn.rollback()

def login(username, password):
    cur.execute("SELECT password FROM users WHERE username = %s", (username,))
    row = cur.fetchone()
    if row:
        stored_hash = row[0].encode()
        if bcrypt.checkpw(password.encode(), stored_hash):
            print("✅ You are now logged in")
            return True
        else:
            print("❌ Wrong password")
    else:
        print("❌ User not found")
    return False

while True:
    action = input("Type 'login', 'signup' or 'exit': ")

    if action == "exit":
        break
    elif action == "signup":
        user = input("Username: ")
        pwd = input("Password: ")
        signup(user, pwd)
    elif action == "login":
        user = input("Username: ")
        pwd = input("Password: ")
        login(user, pwd)

cur.close()
conn.close()
