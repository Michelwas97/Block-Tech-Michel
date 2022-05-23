/* eslint-disable no-undef */
  /************************************************
    * Starting variables
    ***********************************************/

  const express = require('express');
  const multer  = require('multer');
  require('dotenv').config();
  const upload = multer({ dest: 'public/images/profile/' });
  
  const app = express();
 
 /************************************************
   * Dummy data
   ***********************************************/
  const mensen = [
    {
      firstname: 'Michel',
      lastname: 'Wassing',
      email: 'test@test',
      education: 'Communication Multimedia Design',
      liked: null,
    },
    {
      firstname: 'Caitlin',
      lastname: 'Peters',
      email: 'test@test',
      education: 'Rechten',
      liked: null,
    },
    {
      firstname: 'Rogier',
      lastname: 'Verhoeven',
      email: 'test@test',
      education: 'Rechten',
      liked: null,
    },
  ];

  /************************************************
   * Database connection
   ***********************************************/

  const { MongoClient } = require('mongodb');

  async function connectDB() {
    const uri =
      'mongodb+srv://' +
      process.env.DB_USERNAME + ':' +
      process.env.DB_PASS + '@' +
      process.env.DB_HOST + '/' +
      process.env.DB_NAME + '/?retryWrites=true&w=majority';
  
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      await client.connect();
      db = client.db(process.env.DB_NAME);
    } catch (error) {
      throw error;
    }
  }
 
 /************************************************
   * feedback in the console for starting app
   ***********************************************/
 
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
  });
  
 /************************************************
   * Middleware
   ***********************************************/
 
  app.use('/public', express.static('public'));
  app.set('view engine', 'ejs');
  app.set('views', 'views');

  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
 
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
    res.render('pages/admin', { data: mensen });
  });

  app.get('*', (req, res) => {
    res.status(404).render('pages/404');
  });

 /************************************************
   * Routing
   ***********************************************/

  app.post('/add', upload.single('profilepic'), (req, res) => {

    mensen.push ({
      profilepic: req.file,
      firstname: req.body.firstname,
      lastname: req.body.firstname,
      email: req.body.firstname,
      opleiding: req.body.firstname,
    });

    res.render('pages/admin', {data: mensen});
  });

