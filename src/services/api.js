import axios from 'axios';

    const api = axios.create({
        baseURL:'http://localhost:3000',
    })

    // api.interceptors.request.use((config)=>{
    //     try{
            
    //         return config
    //     }catch(error){
            
    //     }
    // })

    api.interceptors.response.use((response) => {
        return response;
     }, error => {
       if (error.response.status === 401) {
      
       }
       return error;
     })

export default api;