import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { Products } from '../types/Product';
import { ImagePath } from 'src/types/ImagePath';

export const addProductImageService = (image: any) => {
  console.log(image);

  fetch('http://10.0.2.2:5000/api/v1/image', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(image)
  })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};

