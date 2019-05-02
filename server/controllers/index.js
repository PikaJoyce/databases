var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, data) => {
        if(err) {
          console.log(err)
          res.status(400)
          res.end()
        } else{
        console.log('get success')
        res.status(200)
        res.send(data)
        res.end()
      }
    })
  }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

