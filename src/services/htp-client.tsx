import axios from "axios";
//import {API_PATH , API_TOKEN } from './consta';

// const devUrl =  axios.create({
//     baseURL: API_PATH,
//     headers: {
//       "Content-type": "application/json",
//       Authorization: `Bearer ${API_TOKEN}`
//     }
//   });

// export default devUrl;

const API_PATH = 'https://mocki.io/';

const httpClient =  axios.create({
    baseURL: API_PATH,
    headers: {
      "Content-type": "application/json",
    }
  });

export default httpClient;