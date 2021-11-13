require('dotenv').config()
const router = require('express').Router();
const ItemsDBSchema = require('../models/ItemsDB');
const stripe = require('stripe')(process.env.STRIPE_SECRET);

//get all items

router.post('/', async (req, res) => {
  try {
    const id = await req.body._id;
    const item = await ItemsDBSchema.findOne({ _id: id });
    if (!item) {
      return res.status(401).json(' you are not authenticated');
    } else if (item) {
      const { shopItemsDb } = item._doc;
      return res.status(200).json(item);
    } else {
      return res.status(500).json('error: something went wrong');
    }
  } catch (err) {
    return res.status(500).json('Oops something went wrong');
  }
});

//update user
router.post('/add', async (req, res) => {
  try {
    const id = await req.body._id;
    const item = await req.body.shopItemsDb;
    // console.log('item:', item)

    if (id) {
      const items = await ItemsDBSchema.findByIdAndUpdate(
        { _id: id },
        {
          $push: { shopItemsDb: item },
        },
        {
          new: true,
        }
      );
      return res.json({ items });
    } else {
      return res.status(401).json('Oops something went wrong');
    }
  } catch (err) {
    return res.status(500).json('Oops something went wrong');
  }
});

//delete items from
router.post('/delete', async (req, res) => {

  const id = req.body._id;
  const deleteItemId = req.body.deleteId;
  try {
    const item = await ItemsDBSchema.findOne({ _id: id });
    const deletedStuff = item.shopItemsDb.splice(deleteItemId, 1);

    await ItemsDBSchema.findByIdAndUpdate(
      { _id: id },
      { shopItemsDb: item.shopItemsDb },
      {
        new: true,
      }
    );
    return res.status(200).json({ message: 'success', stuffDaleted: deletedStuff });
  } catch (err) {
    console.log(err);
  }
});
// FIXME: reikia paslepti api key
// FIXME: istrinti karta objets from cart
// pay
router.post('/pay', async (req, res) => {
  const email = req.body.email;
  const personId = req.body.id;
  const { token } = req.body;



  //get total ammount
  try {
    const item = await ItemsDBSchema.findOne({ _id: personId });
    const allItems = item.shopItemsDb;

    let sum = 0;

    allItems.forEach((item, i) => {
      const addPrice = (a) => {
        sum += a;
        return sum;
      };
      if (item.length > 1) {
        return addPrice(parseInt(item[i].albumprice));
      } else {
        return addPrice(parseInt(item[0].songprice));
      }
    });

    //STRIPE CHARGE
    const priceInCents = sum * 100;
    
    return stripe.customers
    .create({
      email: email,
      source: token.id,
    })
    .then((customer) => {
      // have access to the customer object
      return stripe.charges
        .create({
          customer: customer.id, // set the customer id
          amount: priceInCents,
          currency: 'eur',
        })

        .then((compleate) => {
          res.status(200).json({ compleate });
          // New invoice created on a new customer
        })
        .catch((err) => {
          res.status(500).json({ err });
          // Deal with an error
        });
    });

    //STRIPE CHARGE
  } catch (err) {
    res.status(500).json(err.message || { message: 'you can only update your account' } || err);
  }
});

module.exports = router;
