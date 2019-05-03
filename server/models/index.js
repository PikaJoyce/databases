var { db } = require('../db/index.js');

module.exports = {
  messages: {
    get: function (callback) {
      // Pass in a callback
      // Send query req
      // Pass in query string, and callback(err,data)
      // if err, console err
      // Otherwise pass data into cb 
      db.query(`SELECT * FROM messages`, (err, messages) => {
        if (err) {
          callback(err);
          return;
        } else {
          callback(null, messages);
        }
      });
    },
    post: function (body, callback) {
      let { msg, users_id } = body
      // console.log(reqBody)
      db.query(`INSERT INTO messages (msg, users_id) VALUES ('${msg}', ${users_id})`, (err) => {
        if (err) {
          callback(err)
          return;
        } else {
          console.log('posted')
        }
      })
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * FROM users', (err, users) => {
        if (err) {
          callback(err)
          return;
        } else {
          callback(null, users)
        }
      });
    },
    post: function () { }
  },

  rooms: {
    get: function (callback) {
      db.query('SELECT * FROM rooms', (err, rooms) => {
        if (err) {
          callback(err)
          return;
        } else {
          callback(null, rooms)
        }
      })
    },
    post: function () { }
  }
};



