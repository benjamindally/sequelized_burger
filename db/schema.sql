-- drops if it exists already
DROP DATABASE IF EXISTS bugers_db


-- creates a new database
CREATE DATABASE burgers_db

-- craetes a table with some columns
CREATE TABLE burgers (
    ID AUTO_INCREMENT INT(140) NOT NULL,
    burger VARCHAR(140) NOT NULL,
    PRIMARY KEY (ID),
    devoured BOOLEAN
)