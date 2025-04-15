const express = require('express');
const router = express.Router();
const bookController=require('../controller/bookController.js')


router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBooksbyId);
router.patch('/:id', bookController.editBooksbyId);
router.delete('/:id', bookController.deleteBooksbyId);
router.patch('/:id', bookController.editBooksbyId);
router.post('/',bookController.postBooks)



module.exports = router;