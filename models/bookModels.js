
// const client = new pg.Client({
//     user:process.env.user,
//     host: process.env.host,
//     database:process.env.client,
//     password:process.env.password,
//     port:process.env.port,
// })
// client.connect()

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false  // required for Render
  }
});

client.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("Connection error", err.stack));





exports.getAllBooks=() => {
    return new Promise((resolve, reject) => {
        client.query("Select * FROM library", (err,resp)=>{
            if(err){
                console.error("Error executing query",err.stack);
                reject(err);
            }else{
                const response=resp.rows
               
                resolve(response);

            }  
        })})}



exports.getBooksbyId=(isbn) => {
client.query(`SELECT * from library where isbn=${isbn}`, (err,resp)=>{
    if(err){
        console.error("Error executing query",err.stack);
    }else{
        const response=resp.rows
        console.log(response)
        
        return response
    }
  
})}


exports.editBooksbyId=(title,author,genre,availability,newIsbn,isbn)=>{
    return new Promise((resolve, reject) => {
        client.query('UPDATE library SET title = COALESCE($1, title),author = COALESCE($2, author),genre = COALESCE($3, genre),availability = COALESCE($4, availability),isbn = COALESCE($5, isbn) WHERE isbn = $6',[title,author,genre,availability,newIsbn,isbn], (err,resp)=>{
            if(err){
                console.error("Error executing query",err.stack);
            }else{
                const response={
                    Message:'Success'
                }
                res.json(response)
            }



    })



})}


exports.deleteBooksbyId=(isbn)=>{
    return new Promise((resolve, reject) => {
        console.log(isbn)

    client.query(`DELETE from library where isbn=$1`,[isbn], (err,resp)=>{
        if(err){
            console.error("Error executing query",err.stack);
            reject(err);

        }else{
            const response={
                Message:'Success'
            }
            resolve(response);

        }
       
    })})}



exports.postBooks=(title, author, genre, availability, isbn)=>{

    return new Promise((resolve, reject) => {


    client.query('INSERT into library (title, author, genre, availability, isbn) values($1,$2,$3,$4,$5)',[title,author,genre,availability,isbn], (err,resp)=>{
        if(err){
            console.error("Error executing query",err.stack);
            reject(err);

        }else{
            const response={
                title:title ,
                author: author,
                genre: genre,
                availability:availability ,
                isbn: isbn
            }
            resolve(response);
            console.log(response)

        }
       
    })})
}