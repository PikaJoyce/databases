DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(25)

  -- PRIMARY KEY (id)
); 


CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  msg VARCHAR(200),
  users_id INT NOT NULL, 
  
  FOREIGN KEY (users_id) 
  REFERENCES users(id)
  ON DELETE CASCADE

  -- PRIMARY KEY (id)
); 






  /* Describe your table here.*/

/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

