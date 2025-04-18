const book = require('../models/bookModels.js');


//Controlling the response for all books

exports.getAllBooks = async (req, res) => {
    try {
       const resp= await book.getAllBooks()
       console.log(resp)
       res.json(resp)
    } catch (error) {
      res.status(500).json({ message: "Error fetching posts" });
    }
  }


//Controlling the response to get a book of specific id


exports.getBooksbyId= async (req, res) => {
    try {
        const isbn= req.params.isbn
        const response=await book.getBooksbyId(isbn)
        res.json(response)


    } catch (error) {
      res.status(500).json({ message: "Error operating posts" });
    }
  }


//Controlling the response to posta book.


  exports.postBooks= async (req, res) => {
    try {
        
        const response=await book.postBooks(req.body.title,req.body.author,req.body.genre,req.body.availability,req.body.isbn)
        res.json(response)


    } catch (error) {
      res.status(500).json({ message: "Error operating posts" });
    }
  }


//Controlling the response to edit a book of specific id


  exports.editBooksbyId= async (req,res)=>{
    try{
        const response=await book.editBooksbyId(req.body.title,req.body.author,req.body.genre,req.body.availability,req.body.isbn,req.params.isbn)
        res.json(response)




    } catch(error){
        res.status(500).json({ message: "Error operating posts" });


    }


  }


//Controlling the response to delete a book of specific id


exports.deleteBooksbyId= async (req,res)=>{
    try {
        const isbn= req.params.isbn
        console.log(isbn)

        const resp= await book.deleteBooksbyId(isbn)
        console.log(resp)
        res.json(resp)
     } catch (error) {
       res.status(500).json({ message: "Error operating posts" });
     }

}
