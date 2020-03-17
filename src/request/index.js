import axios from 'axios';

export const AxiosRequest = (request) => {
      const response = axios(request).then( res => {
          return res;
      }).catch(error => {
          return error;
      });
      return response;
}

