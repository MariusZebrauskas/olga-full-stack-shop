const router = require('express').Router();
const ItemsDBSchema = require('../models/ItemsDB');

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
  console.log('id:', id)
  const deleteItemId = req.body.deleteId;
  console.log('deleteItemId:', deleteItemId)
  try {
    const item = await ItemsDBSchema.findOne({ _id: id });
    console.log(item.shopItemsDb.length);
    // console.log(JSON.stringify(item))
    const deletedStuff = item.shopItemsDb.splice(deleteItemId, 1);

    await ItemsDBSchema.findByIdAndUpdate(
      { _id: id },
      { shopItemsDb: item.shopItemsDb },
      {
        new: true,
      }
    );
    return res.status(200).json({message: 'success', stuffDaleted: deletedStuff});
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
