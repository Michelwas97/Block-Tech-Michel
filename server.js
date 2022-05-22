  /************************************************
    * Starting variables
    ***********************************************/

  const express = require('express');
  const multer  = require('multer');
  const upload = multer({ dest: 'public/images/profile/' })
  
  const app = express();
  const port = 3000;
 
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
    })

    res.render('pages/admin', {data: mensen});
  });

