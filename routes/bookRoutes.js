const express = require('express');
const router = express.Router();
const bookController=require('../controller/bookController.js')


router.get('/', bookController.getAllBooks);
router.get('/:isbn', bookController.getBooksbyId);
router.patch('/:isbn', bookController.editBooksbyId);
router.delete('/:isbn', bookController.deleteBooksbyId);
router.patch('/:isbn', bookController.editBooksbyId);
router.post('/',bookController.postBooks)



module.exports = router;
