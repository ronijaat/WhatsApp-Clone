import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const URL = process.env.URL_DB;
// console.log("URL",URL);

const Connection = async()=>{
    try{
        await mongoose.connect(URL).
        then(()=>console.log('dataBase is SuccessFully Connected!!!'))
    }catch(err){
        console.log("error in connecting in Mongodb",err)
    }
}

export default Connection;