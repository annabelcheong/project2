from flask import Flask, render_template, redirect
# from flask_pymongo import PyMongo , CHANGE THIS TO POSGRES VERSION
import events_flask

# Create an instance of Flask
app = Flask(__name__)

# Use xxxxxxx to establish PostGRES connection

@app.route("/")
def home():






if __name__ == "__main__":
    app.run(debug=True)
