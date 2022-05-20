const express = require('express');

const app = express();
const port = 3000;

// feedback in the console for starting app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Middelware
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
  res.render('pages/index', { title: 'Hey', message: 'Hello there!' });
});

app.get('/match', (req, res) => {
  res.render('pages/match', { title: 'Hey', message: 'Hello there!' });
});

app.get('*', (req, res) => {
  res.status(404).render('pages/404');
});

// DATABASE CONNECTION

const { MongoClient } = require('mongodb');

// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  'mongodb+srv://mgwassing:<password>@cluster0.hjnam.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    console.log('hoi');
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
