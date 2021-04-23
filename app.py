from flask import Flask, render_template, redirect
# from flask_pymongo import PyMongo , CHANGE THIS TO POSGRES VERSION
from flask_sqlalchemy import SQLAlchemy
import events_flask

# Create an instance of Flask
app = Flask(__name__)

# Use xxxxxxx to establish PostGRES connection
# Connect to local database
app.config['SQLALCHEMY_DATABASE_URI'] = "postgres:postgres@localhost:5432/events_db"

db = SQLAlchemy(app)
migrate = Migrate(app, db)

# rds_connection_string = "postgres:postgres@localhost:5432/music_db"
# engine = create_engine(f'postgresql://{rds_connection_string}')

@app.route("/")
def home():
    #### NEED TO EDIT THE FOLLOWING ####
    # mars_collect_data = mongo.db.mars_collect.find_one()
    # return render_template("index.html", mars_dict = mars_collect_data)



if __name__ == "__main__":
    app.run(debug=True)
