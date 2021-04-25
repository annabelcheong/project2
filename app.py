from flask import Flask, render_template, redirect, jsonify
import sqlalchemy
import pandas as pd
from sqlalchemy import create_engine, func
import json


# Create an instance of Flask
app = Flask(__name__)

@app.route("/")
def home():

    # # Return template and data
    return render_template("index.html")


@app.route("/api_events")
def events():
    # paste code from events_flask.ipynb

    # Option 1
    rds_connection_string = "postgres:postgres@localhost:5432/events_db"
    
    #Option 2
    # rds_connection_string = "postgres:309Malanday!@localhost:5432/events_db"

    engine = create_engine(f'postgresql://{rds_connection_string}')

    events_info = pd.read_sql_table('events_table', engine) 

    # event_result = events_info.to_json(orient="records")

    # Copied script from 'events_flask.ipynb'
    event_result = json.dumps(json.loads(events_info.to_json(orient = "records")), indent=4)
    event_result = json.loads(event_result)
    return jsonify(event_result)


if __name__ == "__main__":
    app.run(debug=True)
