const express = require('express');
const router = express.Router();
const bookController=require('../controller/bookController.js')

//Router for getting all the books in the database
router.get('/', bookController.getAllBooks);

//Router for getting all books with specific isbn in the database

router.get('/:isbn', bookController.getBooksbyId);

//Router for editing any specific book in the database using isbn

router.patch('/:isbn', bookController.editBooksbyId);

//Router for deleting a books in the database

router.delete('/:isbn', bookController.deleteBooksbyId);

//Router for posting a book in the database

router.post('/',bookController.postBooks)



module.exports = router;
