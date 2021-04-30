# Project 2

## 'ShowUp' ## 
An event finder for all available events in Australia!

*************************
# Team Members
- Annabel Cheong
- Diane Yaneza
- Vanessa Juliana

*************************
# Project Requirements
- This project will use: 
    * Python Flask, powered API, HTML/CSS, Javascript and the PostGres database.
    * A combination of Plotly and Leaflet.    
- This project will have a dataset that contains more than 100 rows.
- There will be a dashboard page which is interactive (dropdown) and is supported with data visualisations, js library or plug in that is not covered in the Data Analytics course, created with the user in mind.
- The dashboard will also contain a visualisation with 3 views (e.g. map, chart and table).

*************************
# Project Overview
## Audience
- General Australian Public

## Purpose and Objective
The purpose of the website is to allow users to look up events by date, location, category, title and description.

A user can look up any event they want and 'ShowUp'! 

- Describe the deliverable.
The project group aim to deliver an interactive webpage with 3 visualisations being an interactive map, chart and table. 

The map shows clustered markers for event locations, and when zoomed in, splits out into individual markers. The user can click on each marker to have a popup which shows show title, date, time and category.

The chart selected is a bubble chart with bubble sizes that represent the ranking (popularity) of the event. There is a dropdown which allows the user to interact and filter out the events by category. The user may also zoom into a cluster of bubbles by date ranges or venue name. 

The table provides the full information of an event date, category, location, description. The table is also interactive in the way that it can be filtered for by category or on a calendar by date ranges.

## Methodology and Approach 
We used Predict HQ API as the data source, PostSQL to host the database, python with libraries such as Pandas, requests and SQLAlchemy for the ETL. Flask was used as the web server with endpoints; home endpoint to render the html file and another end point to pull information from Postgres to use for the Javascript files. 

## Challenges
In the extraction phase, the API was limited to 50 entries per call. Therefore, to overcome this issue, a for loop was used to establish more than 50 records.

Another challenge was the difficulty in converting our PostSQL database into the appropriate json format initially.

The co-ordinates values that is required for the visualisation is transformed into a string instead of 2 datapoints in an object. The pandas and javascript strip function was used to resolve this issue. 

The calendar Plugin called 'Litepicker' was chosen to filter out events by date range. This proved to be a challenge given the poor documentation. The user selected start date and finish date was difficult to extract. However, eventually this was resolved using the newDate() and getTime() functions. 

*************************
