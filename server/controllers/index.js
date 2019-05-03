var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, data) => {
        if(err) {
          res.status(400)
          res.end()
        }
        res.status(200)
        res.send(data)
        res.end()
    })
  },

    post: function (req, res) {
      console.log(req.body[0])
      models.messages.post(req.body[0], (err) => {
        if(err) {
          res.status(400)
          res.end()
        } else {
        res.status(202)
        res.end()
      }
    })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, data) => {
        if(err) {
          res.status(400)
          res.end()
        }
          res.status(200)
          res.send(data)
          res.end()
      })
    },
    post: function (req, res) {}
  },
};






