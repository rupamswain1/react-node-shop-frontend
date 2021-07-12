import axios from 'axios';
export const sellerSignup= async (fullName,email,password,confirmPassword,phone,houseNo,address,pinCode,city,state1)=>{
    const postData={
        fullName:fullName,
        email:email,
        password:password,
        confirmPassword:confirmPassword,
        phoneNo:phone,
        houseName:houseNo,
        address:address,
        pinCode:pinCode,
        city:city,
        state:state1
    }
    const header={
        headers:{
            'content-type':'application/json',
        }
    }
    try{
        const res=await axios.post('/seller/signup',postData,header)
        return ({statusCode:res.status,message:res.data.message,token:res.data.token});
    }
    catch(err){
        console.log(err.response)
        return {data:err.response.data.data,statusCode:err.response.status}
    }
    
    // .then(res=>{
    //     console.log(res)
    //     return Promise.resolve({statusCode:res.status,message:res.data.message});
    // })
    // .catch(err=>{
    //     console.log(err.response)
    //     return Promise.reject({data:err.response.data.data,statusCode:err.response.status}) 
    // })
}