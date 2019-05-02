var {db} = require('../db/index.js');

module.exports = {
  messages: {
    get: function (callback){
      // Pass in a callback
      // Send query req
        // Pass in query string, and callback(err,data)
          // if err, console err
          // Otherwise pass data into cb 
          db.query(`SELECT * FROM messages`, (err, messages) => {
            if(err) {
              callback(err);
              return;
            } else {
            callback(null, messages);
          }
        });
    }, 
    post: function () {
      // Pass in req and callback
        //send query req
          //query string, callback(err, data)
            //if err, console err
            //otherwise pass data into cb
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  },

  rooms: {
    get: function () {},
    post: function () {}
  }
};



