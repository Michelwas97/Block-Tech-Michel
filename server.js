/************************************************
  * Express app
  ***********************************************/

 const express = require('express');
 const app = express();
 const port = 3000;
 
 /************************************************
   * Dummy data
   ***********************************************/
 const mensen = require('../../dummy-data/mensen');
 
 /************************************************
   * feedback in the console for starting app
   ***********************************************/
 
 app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
 });
 
 /************************************************
   * Middleware
   ***********************************************/
 
 app.use('/public', express.static('public'));
 app.set('view engine', 'ejs');
 app.set('views', 'views');
 
 /************************************************
   * Routing
   ***********************************************/

app.get('/', (req, res) => {
  res.render('pages/index', { data: mensen });
});

app.get('/match', (req, res) => {
  res.render('pages/match', { data: mensen });
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

