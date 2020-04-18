
// import axios from 'axios';

// const data = [
//     {
//         id: "11"
//     },
//     {
//         id: "22"
//     }
// ];

// const getItemsApi = () => {
//     // return axios.get("")
//     // .then(response => {
//     //     console.log(response);
//     // });
//     return data;
//     // return Promise.resolve(data);
// };

// export default getItemsApi;

import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { Products} from '../types/Product';


const getProductsService = () => {
  const [result, setResult] = useState<Service<Products>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch('http://10.0.2.2:5000/api/v1/device/header')
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setResult({ status: 'loaded', payload: response })
      })
      .catch(error => {
        console.log(error);
        setResult({ status: 'error', error });
      });
  }, []);

  return result;
};

export default getProductsService;