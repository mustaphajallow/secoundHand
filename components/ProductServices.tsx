import axios from 'axios';

const BASE_URL = 'http://192.168.100.204:3030/products/all';
const BASE_URL_Save = 'http://192.168.100.204:3030/save_product';
// export const productsList =()=>{ axios.get(BASE_URL)}

export const CreateProduct = (product : {name , image, price, description, discount}) =>{
     axios.post(BASE_URL_Save , product).then(
        (res)=>{ console.log(res.data)}).catch(error => console.log(error));

}

export const productsList = async () => {
    try {
      // Make the GET request to the /list endpoint
      const response = await axios.get(BASE_URL);
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