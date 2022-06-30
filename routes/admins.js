const express = require('express')
const router = express.Router()
const multer  = require('multer')

const adminController = require('../controllers/admin-controller')

/************************************************
 * Handle image upload
 ***********************************************/

 const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Upload path should be used
        cb(null, './public/images/profile');
    },
    filename: function (req, file, cb) {
        cb(
            null,
            // Han advised usage of date now and filename to make the name unique
            Date.now() + '-' + file.originalname
        );
    }
});

const upload = multer({
    // Store images inside the specified path
    storage: storage,
});

/** Get methods **/
router.get('/admin', (req, res) => {
    res.render('pages/admin');
});

router.post('/add', upload.single('profilepic'), adminController.addStudent)

/** Post methods **/

module.exports = router;