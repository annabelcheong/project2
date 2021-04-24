from flask import Flask, render_template, redirect
import sqlalchemy
import events_flask
import pandas as pd
from sqlalchemy import create_engine, func
from sqlalchemy.orm import Session
import json


# Create an instance of Flask
app = Flask(__name__)

# Use xxxxxxx to establish PostGRES connection
# Connect to local database
# app.config['SQLALCHEMY_DATABASE_URI'] = "postgres:postgres@localhost:5432/events_db"

# db = SQLAlchemy(app)
# migrate = Migrate(app, db)

rds_connection_string = "postgres:postgres@localhost:5432/events_db"
engine = create_engine(f'postgresql://{rds_connection_string}')
session = Session(engine)

@app.route("/")
def home():
    return "helloworld"

    # # Return template and data
    # return render_template("index.html", mars=mars)

@app.route("/api_events")
def events():
    # paste code from events_flask.ipynb

    rds_connection_string = "postgres:postgres@localhost:5432/events_db"
    engine = create_engine(f'postgresql://{rds_connection_string}')

    events_info = pd.read_sql_table('events_table', engine) 

    event_result = events_info.to_json(orient="records")


    return jsonify(event_result)


# d3.json("/api_events")

if __name__ == "__main__":
    app.run(debug=True)
