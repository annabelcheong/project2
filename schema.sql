--------------
-- TABLE 1 --
--------------

CREATE TABLE events_info (
  id VARCHAR PRIMARY KEY,  
  title VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  category INT NOT NULL,
  start DEC NOT NULL,
  end INT NOT NULL,
  country INT NOT NULL
  location DEC NOT NULL,
  rank INT NOT NULL,
  name VARCHAR NOT NULL,
  venue_name VARCHAR NOT NULL,
  formatted_address VARCHAR NOT NULL
);

