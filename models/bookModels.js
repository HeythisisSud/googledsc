const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false  // required for Render
  }
});
//Connection to postgres
client.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("Connection error", err.stack));



//Database query to get all books

exports.getAllBooks=() => {
    return new Promise((res, rej) => {
        client.query("Select * FROM library", (err,resp)=>{
            if(err){
                console.error("Error executing query",err.stack);
                rej(err);
            }else{
                const response=resp.rows
               
                res(response);

            }  
        })})}

//Database query to get book with specific id.


exports.getBooksbyId=(isbn) => {
  return new Promise((res, rej) => {
client.query('SELECT * from library where isbn=$1',[isbn], (err,resp)=>{
    if(err){
        console.error("Error executing query",err.stack);
    }else{
        const response=resp.rows
        res(response)
    }
  
})})}

//Database query to edit book with specific id.


exports.editBooksbyId=(title,author,genre,availability,newIsbn,isbn)=>{
    return new Promise((res, rej) => {
        client.query('UPDATE library SET title = COALESCE($1, title),author = COALESCE($2, author),genre = COALESCE($3, genre),availability = COALESCE($4, availability),isbn = COALESCE($5, isbn) WHERE isbn = $6',[title,author,genre,availability,newIsbn,isbn], (err,resp)=>{
            if(err){
                console.error("Error executing query",err.stack);
            }else{
                const response={
                    Message:'Success'
                }
                res(response)
            }
    })
})}



//Database query to delete book with specific id.


exports.deleteBooksbyId=(isbn)=>{
    return new Promise((res, rej) => {


    client.query(`DELETE from library where isbn=$1`,[isbn], (err,resp)=>{
        if(err){
            console.error("Error executing query",err.stack);
            rej(err);

        }else{
            const response={
                Message:'Success'
            }
            res(response);

        }
       
    })})}

//Database query to post a book.


exports.postBooks=(title, author, genre, availability, isbn)=>{

    return new Promise((res, rej) => {


    client.query('INSERT into library (title, author, genre, availability, isbn) values($1,$2,$3,$4,$5)',[title,author,genre,availability,isbn], (err,resp)=>{
        if(err){
            console.error("Error executing query",err.stack);
            rej(err);

        }else{
            const response={
                title:title ,
                author: author,
                genre: genre,
                availability:availability ,
                isbn: isbn
            }
            res(response);
            console.log(response)

        }
       
    })})
}
