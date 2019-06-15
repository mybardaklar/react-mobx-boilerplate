const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

var Users = require('../models/Users');

/* GET users listing. */
router.get('/', (req, res, next) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

router.post('/add', (req, res, next) => {
  const {fullname, username, password, email, admin} = req.body;

  bcrypt.hash(password, 10, (err, hash) => {

    const user = Users(
      {
        fullname,
        username,
        password: hash,
        email,
        admin
      }
    );

    user.save(err => {
      if(err) throw err;
  
      res.json({
        status: true,
        message: 'User saved successfully!'
      });
    });

  });
});

module.exports = router;
