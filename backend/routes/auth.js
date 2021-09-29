const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//REGISTER************************************************************************

router.post('/register', async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(10);
    const hasedPassword = await bcrypt.hash(req.body.password, salt);
    //create new user
    const user = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hasedPassword,
      isAdmin: false,
    });

    const takenUserName = await User.findOne({ email: user.email });

    if (takenUserName) {
      res.json({ register: false });
      return;
    } else {
      let { password, ...rest } = await user._doc;
      //save and return respond
      await user.save();
      res.json({ register: true });
    }
  } catch (err) {
    res.json({ error: err });
  }
});

// LOGIN****************************************************************************

router.post('/login', async (req, res) => {
  try {
    // const emailFromFrontEnd = await req.body.email;
    const user = await User.findOne({ email: req.body.email });
    // const passwordValidation = await bcrypt.compare(req.body.password, user.password);

    if (!user) {
      //chek is user entering valid email
      res.status(404).json('invalid email');
      return;
    } else if (user) {
      //if user entered valid email we can chek password
      const passwordValidation = await bcrypt.compare(req.body.password, user.password);
      if (!passwordValidation) {
        res.status(401).json('invalid password');
        return;
      }
    }
    //loggin sucesfull
    const { password, ...person } = user._doc;
    res.status(200).json(person);
  } catch (err) {
    res.status(400).send(err.message);
    return;
  }
});

module.exports = router;
