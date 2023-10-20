import axios from "axios"
import Toast from 'react-native-toast-message';

// Base URL
const baseUrl = 'http://192.168.8.100:3000';

// const baseUrl = 'http://192.168.69.89:80/cfpedouala/index.php/api';
// get request
export const getAxios = async (url,data, base = baseUrl) => {
  return axios
    .get(`${base}${url}` ,data, { responseType: 'json' })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Error',
        text2: 'An error has occurred, please check your data',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
      });
      return error;
    });
};



// post request
export const postAxios = async (url, data, base=baseUrl) => {
    try {
    const response = await axios.post(`${base}${url}`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'Error',
      text2: 'An error has occured, please check your data',
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 30,
    });
    return error;
  }
}

// put request
export const putAxios = async (url, data, base=baseUrl) => {
    try {
    const response = await axios.put(`${base}${url}`, data);
    return response.data;
  } catch (error) {
    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'Error',
      text2: 'An error has occured, please check your data',
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 30,
    });
    return error;
  }
}

// delete request
export const deleteAxios = async (url, base=baseUrl) => {
    try {
    const response = await axios.delete(`${base}${url}`);
    return response.data;
  } catch (error) {
    Toast.show({
      type: 'error',
      position: 'top',
      text1: 'Error',
      text2: 'An error has occured, please check your data',
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 30,
    });
    return error;
  }
}
