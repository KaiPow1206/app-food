import express from 'express'


const app = express();



app.use(express.json());

app.get(`/test`,(req,res) => {
   res.send("hello");
 }
 );

app.listen(8080,() => {
   console.log("Server online at port 8080");
 }
 );