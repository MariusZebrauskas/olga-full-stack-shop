const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

//update user
router.put('/:id', async (req, res) => {
  // console.log('req:', req.body);
  const { _id } = await req.body;
  const params = await req.params.id.trimEnd();

  if (_id == params || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const params = await req.params.id.trimEnd();
      const updates = await req.body;
      const options = { new: true };
      const user = await User.findByIdAndUpdate(params, updates, options);
      res.status(200).json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    res.status(403).json('you can update only ur account ');
  }
});

//delete user
router.delete('/:id', async (req, res) => {
  // console.log('req:', req.body);
  const { _id } = await req.body;
  const params = await req.params.id.trimEnd();
  if (_id == params || req.body.isAdmin) {
    try {
      const params = await req.params.id.trimEnd();
      await User.findByIdAndDelete(params);
      res.status(200).json({ message: 'account has been deleted' });
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    res.status(403).json('you can delete only ur account ');
  }
});
//get a user
router.get('/:id', async (req, res) => {
  // console.log('req:', req.body);
  const { _id } = await req.body;
  const params = await req.params.id.trimEnd();
  if (_id == params || req.body.isAdmin) {
    try {
      const params = await req.params.id.trimEnd();
      const user = await User.findById(params);
      const { password, shopItems, isAdmin, isAuthenticated, _id, ...rest } = user._doc;
      res.status(200).json(rest);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    res.status(403).json('cant find this user');
  }
});
//fallow  user
//unfallow  user

// chek
router.get('/', (req, res) => {
  console.log("connecting to test api");
  res.json({message: 'api working'});
});

module.exports = router;
