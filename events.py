###################################
# CODE is taken from events.ipynb #
###################################

# Dependencies
import requests
import pprint
import json
import requests
import pandas as pd
import numpy as np
from pandas.io.json import json_normalize 
from sqlalchemy import create_engine

# Credential File: py_config.py containing variable ACCESS_TOKEN = "xxxxxxxxx"
import py_config

# Create variable "entries" to store the list of dictionaries; 
# Each loop will contain a dictionary (as each pandas dataframe is a dictionaries). 
events_entries=[]

# Do a 'for loop' which loops from index 0 to 5000, at muliples of 50 (as API page can only call 50 entries max each time)
for i in range(0,1500,50):

    response = requests.get(
        url=f"https://api.predicthq.com/v1/events?offset={i}&limit=50",
        headers={
        "Authorization": f"Bearer {py_config.ACCESS_TOKEN}",
        "Accept": "application/json"
        },
        params={
            "country": "AU",
            "start": "2021-01-01",
            "end": "2022-12-31"
        }
    )

    # Save response to variable "data" 
    data = response.json()
  
    # Save to variable "events_df" 
    events_df = pd.json_normalize(data, ['results'], errors='ignore')
    # print(events_df.head(3))

    # Create function to store variable 'name' 
    def getEntitiesName(entities):
        try:
            return entities[0]['name']
        except:
            return 'no name'
    
    events_df['name'] = events_df.entities.apply(getEntitiesName)


    # Create function to store variable 'formatted_address' 
    def getEntitiesAddress(entities):
        try:
            return entities[0]['formatted_address']
        except:
            return 'no address'
    events_df['formatted_address'] = events_df.entities.apply(getEntitiesAddress)

    # Create function to store variable 'venue_name' 
    def getEntitiesVenue(entities):
        try:
            return entities[1]['name']
        except IndexError:
            return 'no venue'
    events_df['venue_name'] = events_df.entities.apply(getEntitiesVenue)

    # Extract out only required variables (column headings)
    events_df = events_df[["id","title","description","category","start","end","country","location","rank","name","venue_name",                 "formatted_address"]]
     
     # append to list 'events_entries
    events_entries.append(events_df)

    # TEST
    # print(events_entries)
############################
##### TRANSFORMATION #####
############################

# Concatenate all the dictionaries within list "events_entries". 
# i.e. Convert list to contain the data in the 1 dictionary.
# Save into variable "events_entries_df"
events_entries_df = pd.concat(events_entries)

# Rename columns
events_entries_df = events_entries_df.rename(columns={'start': 'start_date','end':'end_date','location':'coords','name':'title2'})
# events_entries_df

# Drop column title2
events_entries_df = events_entries_df.drop(columns={'title2'})
# events_entries_df


############################
##### LOAD #####
############################
# Connect to local database
# for everyone else
rds_connection_string = "postgres:postgres@localhost:5432/events_db"
engine = create_engine(f'postgresql://{rds_connection_string}')

# Load data events_entries_df into postgres database 'events_db', in the table 'events_table'
events_entries_df.to_sql(name='events_table', con=engine, if_exists='append', index=False)