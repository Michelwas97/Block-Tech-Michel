
  /************************************************
  * Starting variables
  ***********************************************/

  const express = require('express')
  const app = express()
  const { ObjectId } = require('mongodb')
  const connectDB = require('./config/db')
  const mongoose = require('mongoose')
  const arrayify = require('array-back')

  /************************************************
  * Database connection
  ***********************************************/

  require('dotenv').config();
  connectDB().then(console.log(`Connectie met database succesvol`))

  let db = null;
 
  /************************************************
  * feedback in the console for starting app
  ***********************************************/
 
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
  });

  const studentRouter = require('./routes/studenten')
  const adminRouter = require('./routes/admins')
  const errorRouter = require('./routes/errors')
  
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
  
  app.use(studentRouter)
  app.use(adminRouter)  
  app.use(errorRouter)