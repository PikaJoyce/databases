-- DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;


CREATE TABLE users (
  id INT NOT NULL,
  username VARCHAR(25),

  PRIMARY KEY (id)
); 

CREATE TABLE rooms (
  id INT NOT NULL,
  roomname VARCHAR(25),
  users_id INT NOT NULL,

  FOREIGN KEY (users_id) 
  REFERENCES users(id)
  ON DELETE CASCADE,

  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id INT NOT NULL,
  msg VARCHAR(200),
  users_id INT NOT NULL, 
  rooms_id INT NOT NULL,
  
  FOREIGN KEY (users_id) 
  REFERENCES users(id)
  ON DELETE CASCADE,

  FOREIGN KEY (rooms_id) 
  REFERENCES rooms(id)
  ON DELETE CASCADE,

  PRIMARY KEY (id)
); 






  /* Describe your table here.*/

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

