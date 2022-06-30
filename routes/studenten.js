const express = require('express');
const router = express.Router()

const studentController = require('../controllers/student-controller')

/** Get methods **/
router.get('/', studentController.getStudent);
router.get('/liked', studentController.getLikedStudent);

/** Post methods **/

router.post('/update', studentController.updateStudent)
router.post('/delete', studentController.updateStudent)

module.exports = router;