const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema(
//   {
//     username: {
//       type: String,
//       required: true,
//       min: 3,
//       max: 20,
//       unique: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       max: 50,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//       min: 6,
//     },
//     shopItems: {
//       type: Array,
//       default: [],
//     },
//     isAdmin: {
//       type: Boolean,
//       default: false,
//     },
//     isAuthenticated: {
//       type: Boolean,
//       default: false,
//     },
//     bothBefore: {
//       type: Array,
//       default: [],
//     },
//     desc: {
//       type: String,
//       max: 50,
//     },
//     city: {
//       type: String,
//       max: 50,
//     },
//     from: {
//       type: String,
//       max: 50,
//     },
//     relationship: {
//       type: Number,
//       enum: [1, 2, 3]
//     }
//   },
//   { timestamps: true }
// );

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    shopItems: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isAuthenticated: {
      type: Boolean,
      default: false,
    },
    bothBefore: {
      type: Array,
      default: [],
    },
    desc: {
      type: String,
      default: '',
      max: 50,
    },
    city: {
      type: String,
      default: '',
      max: 50,
    },
    from: {
      type: String,
      default: '',
      max: 50,
    },
    relationship: {
      type: Number,
      enum: [1, 2, 3],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
