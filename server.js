const express = require('express')
const app = express()
const port = 3000

// feedback in the console for starting app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Middelware
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
  res.render('pages/index', {title: 'Hey', message: 'Hello there!' })
})

app.get('/match', (req, res) => {
  res.render('pages/match', {title: 'Hey', message: 'Hello there!' })
})