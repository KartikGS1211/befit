// import { myAxios } from "./helper";

// export const register = (user) => {
//     return myAxios
//     .post('/api/employees')
//     .then((response) =>response.json());
// }

import { myAxios } from "./helper";

export const register = (user) => {
  return myAxios
    .post('/api/employees', user) 
    .then((response) => response.data)  
    .catch((error) => {
      console.error('There was an error during registration:', error);
      throw error; 
    });
};
