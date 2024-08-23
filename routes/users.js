var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  let users = [
    {
      "id": 1,
      "name": "John",
      "email": "John@gmail.com"
    },
    {
      "id": 2,
      "name": "Anna",
      "email": "anna@gmail.com"
    },
    {
      "id": 3,
      "name": "Pawan",
      "email": "pawan@gmail.com"
    }
  ];
  res.send(users);
});

module.exports = router;
