const mongoose = require('mongoose');

const ItemsDBSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
    },
    shopItemsDb: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ItemsDB', ItemsDBSchema);
