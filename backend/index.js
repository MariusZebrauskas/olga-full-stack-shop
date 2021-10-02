const express = require('express');
const app = express();
const port = 8800;
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const recoverRoutes = require('./routes/recover');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
dotenv.config();

const errorHandler = (err, req, res, next) => {
  if (err) {
    res.send(`<h1>Ooops there was an error</h1>`);
  }
};
//middlewere
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/recover', recoverRoutes);

app.get('/', (req, res) => {
  res.json('hello');
});

//error handler MAIN
app.use(errorHandler);

mongoose.connect(process.env.MONGO_URL, () => {
  app.listen(port, (req, res) => {
    console.log(`app is running on ${port} + mongo`);
  });
});
