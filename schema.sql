--------------
-- TABLE 1 --
--------------

CREATE TABLE events_table (
  id VARCHAR PRIMARY KEY,  
  title VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  category INT NOT NULL,
  startDate VARCHAR NOT NULL,
  endDate VARCHAR NOT NULL,
  country INT NOT NULL,
  coords DEC NOT NULL,
  rank INT NOT NULL,
  venue_name VARCHAR NOT NULL,
  formatted_address VARCHAR NOT NULL
);

