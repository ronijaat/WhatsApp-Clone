import axios from 'axios';

const url = 'http://localhost:8000';

export const addUser = async(data)=>{
    try{
        await axios.post(`${url}/add`,data);
    }catch(error){
        console.log('error in addUser',error);
    }
}

export const getusers = async()=>{
    try{
        const res = await axios.get(`${url}/users`, {
            mode: 'no-cors'
       });
        return res.data;
    }catch(error){
        console.log('error in getusers',error);
    }
}

export const setConversation = async(data)=>{
    try{
        // console.log("data",data);
        await axios.post(`${url}/conversation/add`,data);
    }catch(error){
        console.log('error in setConversation',error);
    }
}

export const getConversation = async(data)=>{
    try{
        const dataa = await axios.post(`${url}/conversation/get`,data);
        console.log("data",dataa.data);
        return dataa.data;
    }catch(error){
        console.log('error in getConversation',error);
    }
}

export const newMessage = async(data)=>{
    try{
        await axios.post(`${url}/message/add`,data);
    }catch(error){
        console.log('error in newMessage',error);
    }
}

export const getMessages = async(id)=>{
    try{
        let res = await axios.get(`${url}/message/get/${id}`);
        return res.data;
    }catch(error){
        console.log('error in getMessages',error);
    }
}

export const uploadFile = async(data)=>{
    try{
        return await axios.post(`${url}/file/upload`,data);
    }catch(error){
        console.log('error in uploadFile',error);
    }
}