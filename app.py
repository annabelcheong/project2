# Dependencies
from flask import Flask, render_template, redirect, jsonify
# import sqlalchemy
import pandas as pd
from sqlalchemy import create_engine, func
import json
import os
from flask_sqlalchemy import SQLAlchemy

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################
## HEROKU - app deployment
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql' + os.environ.get('DATABASE_URL', '')[8:]  
# # or "sqlite:///db.sqlite"

# # Remove tracking modifications
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy(app)

####################### END POINTS #######################
# END POINT: HOME
@app.route("/")
def home():

    # Return template and data
    return render_template("index.html")

@app.route("/ShowMap")
def map():

    # Return template and data
    return render_template("ShowMap.html")

@app.route("/ShowChart")
def chart():

    # Return template and data
    return render_template("ShowChart.html")

@app.route("/ShowTable")
def table():

    # Return template and data
    return render_template("ShowTable.html")


# END POINT: JSON EVENTS DATA
@app.route("/api_events")
def events():
    # See events_flask.ipynb for the same code at this end point, showing the variable outputs throughout the steps. 

    ######### CONNECT TO DATABASE AND READ DATA AS DATAFRAME VIA PANDAS #########
    # Step 1. ##### Connect to postgres database and save to variable 'engine' #####

        ### Option 1: For postgres users
    rds_connection_string = "postgres:postgres@localhost:5432/events_db"
    
        ### Option 2: For postgres users to enter in personal login details (if option1 does not work)
    # rds_connection_string = "postgres:309Malanday!@localhost:5432/events_db"

    engine = create_engine(f'postgresql://{rds_connection_string}')

    # Step 2. #### Save the data to a variable via pandas, using the 'engine' variable. #####
    events_info = pd.read_sql_table('events_table', engine) 

    # Step 3. #### Remove unwanted characters from 'coords' column #####
    events_info['coords'] = events_info.coords.str.lstrip('{')
    events_info['coords'] = events_info.coords.str.rstrip('}')

    # Step 4. #### Convert pandas dataframe to json format. json.loads will convert it to a clean and readable format. #####
    event_result = json.dumps(json.loads(events_info.to_json(orient = "records")), indent=4)
    event_result = json.loads(event_result)
    return jsonify(event_result)

##########################################################

if __name__ == "__main__":
    app.run(debug=True)