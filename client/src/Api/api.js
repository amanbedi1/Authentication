import axios from "axios";

const url = "http://localhost:4000";

export const signin = async (formdata) => {
  try {
    const { data } = await axios.post(`${url}/signin`, formdata);
    return data;
  } catch (err) { 

    if (err.response && err.response.data) {
      throw(err.response.data.message); 
    }
    console.error(err);
  }
};

export const signup = async (formdata) => {
  try {
    const { data } = await axios.post(`${url}/signup`, formdata);
    return data;
  } catch (err) {
    if (err.response && err.response.data) {
      throw(err.response.data.message); 
    }
    console.error(err);
  }
};
