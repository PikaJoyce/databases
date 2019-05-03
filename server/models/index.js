var { db } = require('../db/index.js');

module.exports = {
  messages: {
    get: function (callback) {
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
      let { msg, roomname, username } = body
      console.log(body, 'this is body models');
      db.query(`INSERT INTO messages (msg, roomname, users_id) VALUES ('${msg}', '${roomname}', (SELECT id FROM users WHERE users.username = '${username}'))`, (err,data) => {
        if (err) {
          console.log('model fail')
          callback(err)
          return;
        } else {
          callback(null, data)
        }
      })
    }
  },

  users: {
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
    post: function (username, callback) {
      db.query(`INSERT INTO users (username) VALUES ('${username}')`, (err,data)=> {
        if (err) {
          callback(err)
          return;
        } else {
          callback(null, data)
        }
      })
    }
  },
};



