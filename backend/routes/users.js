const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

//update user
router.post('/', async (req, res) => {
  const { _id, shopItems } = await req.body;


  if (_id || req.body.isAdmin) {
    
    try {
  const { _id, shopItems } = await req.body;
      
      const options = { new: true };
      const user = await User.findByIdAndUpdate(_id, { $push: { shopItems: shopItems} }, options);
      res.status(200).json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    res.status(403).json('you can update only ur account ');
    // 
  }
});



module.exports = router;
