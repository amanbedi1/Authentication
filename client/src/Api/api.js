import axios from "axios";  

const url ="";

export const signin = async (formdata) => { 
  
  try {
    const { data } = await axios.post(`${url}/signin`, formdata); 
    return data;
  } catch (err) {
    if (err.response.status === 401) {
      throw err.response.data.message;
    }
    console.error(err);
  }
};

export const signup = async (formdata) => {
  try {
    const { data } = await axios.post(`${url}/signup`, formdata);
    return data;
  } catch (err) {
    if (err.response.status === 401) {
      throw err.response.data.message;
    }
    console.error(err);
  }
};
