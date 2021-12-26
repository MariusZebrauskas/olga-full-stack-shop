const express = require('express');
const app = express();
const PORT = process.env.PORT || 8800;
const cartRoutes = require('./routes/cart');
const authRoutes = require('./routes/auth');
const recoverRoutes = require('./routes/recover');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
// https force
const enforce = require('express-sslify');
// compres data
// const compression = require('compression');
dotenv.config();

const errorHandler = (err, req, res, next) => {
  if (err) {
    res.send(`<h1>Ooops there was an error</h1>`);
  }
};
//middlewere
app.use(express.json());
// protect headers from hackers
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.permittedCrossDomainPolicies());
app.use(helmet.referrerPolicy());
app.use(helmet.xssFilter());
// info about requests
app.use(morgan('common'));
// cors alloow front to back comunicate
app.use(cors());
// app.use(compression());

app.use('/api/cart', cartRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/recover', recoverRoutes);

// https referirect

if (process.env.NODE_ENV === 'production') {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}
app.use(express.static('client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
//error handler MAIN
// app.use(errorHandler);
mongoose.connect(process.env.MONGO_URL, () => {
  app.listen(PORT, (req, res) => {
    console.log(`app is running on ${PORT} + mongo`);
  });
});

// FIXME: valsai  ,31, , dar neturime valsas 8 neturi garso
// FIXME: music fairy stories 2,3 dar neturime
// FIXME: parasyti komentara drag mouse left or right po kuriniais

