/* eslint-disable no-useless-catch */
/* eslint-disable no-undef */
  /************************************************
    * Starting variables
    ***********************************************/

  const express = require('express');
  const multer  = require('multer');
  require('dotenv').config();

  const arrayify = require('array-back');
  
  const app = express();

  let db = null;
 
  /************************************************
   * Database connection
   ***********************************************/

  const { MongoClient } = require('mongodb');
  const { ObjectId } = require('mongodb');

  async function connectDB() {
    const uri =
      'mongodb+srv://' +
      process.env.DB_USERNAME + ':' +
      process.env.DB_PASS + '@' +
      process.env.DB_HOST + 
      '/?retryWrites=true&w=majority';
  
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
    connectDB().then(console.log('We have a connection'));
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
  
  app.get('/', async (req, res) => {
    const studenten = await db.collection('studenten').find({},{}).toArray();

    res.render('pages/index', { studenten: studenten });
  });

  app.get('/liked', async (req, res) => {
    const studenten = await db.collection('studenten').find({liked: true}).toArray();

    res.render('pages/liked', { studenten: studenten });
  });

  app.get('/admin', async (req, res) => {
    const studenten = await db.collection('studenten').find({},{}).toArray();

    res.render('pages/admin', { studenten: studenten });
  });

  app.get('*', (req, res) => {
    res.status(404).render('pages/404');
  });

 /************************************************
   * Handle image upload
   ***********************************************/

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Specify what upload path should be used 
      cb(null, './public/images/profile'); 
    },
    filename: function (req, file, cb) {
      cb(null,
        // Han advised usage of date now and filename to make the name unique
        Date.now() + '-' + file.originalname 
      );
    }
  });
  
  const upload = multer({
    // Store images inside the specified path
    storage: storage,
  });

  /************************************************
   * Add student to database
   ***********************************************/

  app.post('/add', upload.single('profilepic'), async (req, res) => {

    let student = {
      profilepic: req.file.filename,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      education: req.body.education,
      liked: false
    };

    // Add student to database
    await db.collection('studenten').insertOne(student);

    res.render('pages/index');
  });

  app.post('/update', async (req, res) => {

     if (req.body.hasOwnProperty('like')) {
      await db.collection('studenten').updateOne(
        {_id: ObjectId(req.body.like)},
        {$set: {liked: true}}
      );
     } else {
      await db.collection('studenten').updateOne(
        {_id: ObjectId(req.body.unlike)},
        {$set: {liked: false}}
      );
     }

    res.redirect('/');
  });

