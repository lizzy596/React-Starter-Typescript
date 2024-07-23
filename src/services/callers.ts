import * as config from  '../../config.json';
import axios from 'axios';
//import authService from "./auth.service";

const url = config.apiServerUrlDevelopment;
//const { token } = authService.userValue;


const authConfig = {
  baseUrl: url,
  withCredentials: true,
  headers: {
      //  'Authorization': `Bearer ${token}`

  }
}

export const httpCaller = axios.create({
  baseURL: url,
  withCredentials: true,
});

httpCaller.interceptors.response.use(
  response => response,
  error=> {
    if(error.response.status >= 400 && error.response.status < 500) {
      console.log('ERROR IN INTERCEPTOR', error)

    }
  }
)

// const createAuthHeader = (config) => {
//   const { token } = authService.userValue;
//   Object.assign(config, {
//     withCredentials: true,
//     baseURL: url,
//     headers: {
//       'Authorization': `Bearer ${token}`
//     }
//   });
//   return config;
// }





export const authCaller = axios.create(authConfig);

authCaller.interceptors.response.use(
  response => response,
  error=> {
    if(error.response.status >= 400 && error.response.status < 500) {
      console.log('ERROR IN INTERCEPTOR', error)

    }
  }
)

