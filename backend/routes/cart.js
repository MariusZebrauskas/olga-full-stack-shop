require('dotenv').config();
const nodemailer = require('nodemailer');
const User = require('../models/User');
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

    let sum = 0.75;

    allItems.forEach((item, i) => {
      const addPrice = (a) => {
        sum += a;
        return sum;
      };
      if (item.length > 1) {
        return addPrice(parseFloat(item[i].albumprice));
      } else {
        return addPrice(parseFloat(item[0].songprice));
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

router.post('/email', async (req, res) => {
  const email2 = req.body.res.data.compleate.billing_details.name;
  const { email } = req.body;
  let emails = [email, email2];
  const { id } = req.body;
  const { status } = req.body.res;
  try {
    if (status === 200) {
      const itemsFromDB = await ItemsDBSchema.findOne({ _id: id });
      const allItems = itemsFromDB.shopItemsDb;
      // find files ID

      let itemsIds = [];
      const itemFilter = allItems.forEach((item, i) => {
        if (item.length > 1) {
          item.forEach((single) => {
            itemsIds.push(single.noteID);
          });
        } else {
          itemsIds.push(item[0].noteID);
        }
      });

      // FIXME::send files++++++++++++++++++++++++++++++++++++++++++++++++++++++
      async function sendEmail() {
        // FIXME:test account + env data
        const testAccount = {
          user: process.env.EMAIL_NAME,
          pass: process.env.EMAIL_PASS,
        };

        const client = emails.toString(); //FIXME:client

        const transporter = nodemailer.createTransport({
          host: 'smtp.mail.yahoo.com',
          port: 465,
          auth: {
            user: testAccount.user,
            pass: testAccount.pass,
          },
          secure: true, // true for 465, false for other ports
          tls: {
            rejectUnauthorized: false,
          },
        });

        // FIXME:: shop send all atimes to user logica
        // items from db
        // const itemsFromDB = [3]; //FIXME:item ids vaiable
        //   download items
        const attachments = [];
        // class constructor
        let Store = class {
          constructor(name) {
            this.filename = `${name}.pdf`;
            this.path = `${__dirname}/files/${name}.pdf`;
          }
        };
        // file maker
        const fileBuilder = itemsIds.map((item) => {
          let items = new Store(item);
          return attachments.push({ filename: items.filename, path: items.path });
        });

        let info = await transporter.sendMail({
          from: testAccount.user, // sender address
          to: emails, // list of receivers
          subject: '✔ Note purchase', // Subject line
          html: `<div>
              <h1>Thanks ${client}  for using our service,</h1>
              <h4>do not respond to this email because it is automatic email</h4>
          </div>`,
          attachments,
        });

        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      }

      sendEmail()
        .catch(console.error)
        .then(() => {
          // FIXME:delte from db and
          const deletingFromDBAllItems = async () => {
            const deletingItems = await ItemsDBSchema.findByIdAndUpdate(
              { _id: id },
              { shopItemsDb: [] },
              {
                new: true,
              }
            );
          };
          deletingFromDBAllItems();
          return res.json({ message: 'success' });

          // FIXME:delte from db and
        });
    } else {
      // console.log('need help');
      res.json({ message: 'faill' });
    }
  } catch (err) {
    console.log(err.message);
  }
});


// ////////////////////////////////////////////////////////message


router.post('/message', async (req, res) => {
  const person = {
    id: req.body._id,
    email: req.body.email,
    message: req.body.message
  };

  try{
    const userRequest = await User.findOne({ _id: person.id});
    if(userRequest.email === person.email){

      async function sendEmail() {
        const testAccount = {
          user: process.env.EMAIL_NAME,
          pass: process.env.EMAIL_PASS,
        };

        const sendTo = "zebrauskas.mar@gmail.com" //FIXME:OLGOS EMAILA

        const transporter = nodemailer.createTransport({
          host: 'smtp.mail.yahoo.com',
          port: 465,
          auth: {
            user: testAccount.user,
            pass: testAccount.pass,
          },
          secure: true, // true for 465, false for other ports
          tls: {
            rejectUnauthorized: false,
          },
        });


        let info = await transporter.sendMail({
          from: testAccount.user, // sender address
          to: sendTo, // list of receivers
          subject: '✔ Client Message', // Subject line
          html: `<div>
              
              <h4>${person.message}</h4>
          </div>`,
        });

        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      }

      sendEmail()
        .catch(console.error)
        .then(()=> {
          return res.status(200).json({message:`your message been sent`});
        })
      // FIXME:email


    } else {
      return res.status(500).json({ error:"something went wrong"})
    }
  } catch(err){
    console.log(err);
    return res.status(500).json({ error: err.message})
  }
});

module.exports = router;
