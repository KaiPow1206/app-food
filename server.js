import express from 'express'
import rootRoutes from './src/routes/root.router.js';


const app = express();



app.use(express.json());
app.use(rootRoutes);
app.get(`/test`,(req,res) => {
   res.send("hello");
 }
 );

app.listen(8080,() => {
   console.log("Server online at port 8080");
 }
 );