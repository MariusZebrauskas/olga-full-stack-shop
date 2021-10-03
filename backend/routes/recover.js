const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
// stage 1 receive request yto change password
// receiving email + username
router.post('/', (req, res) => {
  const email = req.body.email || '';
  const username = req.body.username || '';
  console.log('request received' + email + " " + username);
  const users = User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        console.log('i dont have user ');
        res.status(403).json({ message: 'no such email' });
        return;
      } else if (user) {
        if (user.username == username) {
          console.log('they match');
          res.status(200).json({ userId: user._id });
          return;
        } else {
          res.status(401).json('something went wrong');
          return;
        }
      }
    })
    .catch((err) => res.json(err));
});

// stage 2 changing password
router.post('/password', async (req, res) => {
  console.log('we are in stage 2');
  const { _id, password } = req.body;
  const salt = 10;
  try {
    const hasedPassword = await bcrypt.hash(password, salt);
    User.findOneAndUpdate({ _id: _id }, { password: hasedPassword }, { new: true }, (err, user) => {
      if (err) {
        res.status(400).json({ error: err });
        return;
      } else if (user) {
        res.status(200).json({ message: 'you have successfully updated you account' });
        return;
      }
    });
  } catch (err) {
    console.log(err);
    return;
  }
});

module.exports = router;
