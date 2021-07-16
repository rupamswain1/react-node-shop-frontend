import axios from 'axios';

export const signInApi=async (email,password)=>{
    const postData={
        email:email,
        password:password
    }

    const headerData={
        headers:{'content-type':'application/json',}
    }
    try{
        const res=await axios.post('/seller/login',postData,headerData);
        console.log(res);
        return {statusCode:res.status,token:res.data.token}
    }
    catch (e){
        console.log(e.response.data);
        if(e.response.data.data!==undefined){
            return {data:e.response.data.data[0],statusCode:e.response.status}
        }
        if(e.response.data){
            return {data:e.response.data,statusCode:e.response.status}
        }
            
    }
}