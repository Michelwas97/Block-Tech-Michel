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
  res.render('pages/index');
});

app.get('/match', (req, res) => {
  res.render('pages/match');
});

app.get('/admin', (req, res) => {
  res.render('pages/admin');
});

app.get('*', (req, res) => {
  res.status(404).render('pages/404');
});

app.post('/add', async (req, res) => {
  //functionaliteit
});

