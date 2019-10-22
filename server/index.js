const keys = require('./keys');

// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const mongoose = require('mongoose');
// Connect to MongoDB
mongoose
  .connect(
    'mongodb://localhost:27017/AddressBook',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


// Redis Client Setup
const redis = require('redis');
const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000
});

const redisPublisher = redisClient.duplicate();

// Express route handlers

app.get('/', (req, res) => {
  res.send('Hi');
});

const Item = require('./models/Item');

app.get('/values/all', async (req, res) => {

  Item.find()
  .then(items => {
    console.log(items);
    res.send(items);
  })
  .catch(err => {
    console.log(err);
    res.status(404).json({ msg: 'No items found' });
  });

});

// app.get('/values/current', async (req, res) => {
//   redisClient.hgetall('values', (err, values) => {
//     res.send(values);
//   });
// });

app.post('/values', async (req, res) => {
  // const index = req.body.index;

  // if (parseInt(index) > 40) {
  //   return res.status(422).send('Index too high');
  // }

  // redisClient.hset('values', index, 'Nothing yet!');
  // redisPublisher.publish('insert', index);
  // pgClient.query('INSERT INTO values(number) VALUES($1)', [index]);

  // res.send({ working: true });

  const newItem = new Item({
    name: req.body.index
  });

  newItem.save().then(item => {
    console.log('Success, ', newItem);
  }).catch(err => console.log('failed'))

});

app.listen(5000, err => {
  console.log('Listening');
});
