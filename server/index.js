import express from 'express';
import Connection from './database/db.js';
import bodyParser from 'body-parser';
import router from './routes/route.js'
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
app.use(router);

const PORT = 8000;

Connection();

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})