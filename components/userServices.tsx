
import axios from 'axios';

const BASE_URL = 'http://192.168.100.204:3030/users/save';
const AllAccount = 'http://192.168.100.204:3030/users';

export const listUsers =()=>{ axios.get(BASE_URL)}
export const CreateUsers =(User: { firstName: string; email: string; password: string; })=>{ 
    axios.post(BASE_URL,User).then(
    (res)=>{ console.log(res.data)}).catch(error => console.log(error))}


    export const getUsers =(User: { firstName: string; email: string; password: string; })=>{ 
        axios.get(BASE_URL ).then(
        (res)=>{ console.log(res.data)}).catch(error => console.log(error))}
      

        export const getAllUsers = async () => {
          try {
            // Make the GET request to the /list endpoint
            const response = await axios.get(AllAccount);
            return response.data; // Return the list of users
          } catch (error) {
            console.error('Error fetching users:', error.message);
            if (error.response) {
              console.error('Response Data:', error.response.data);
              console.error('Status Code:', error.response.status);
            }
            throw error; // Re-throw error to handle it in your UI
          }
        };
