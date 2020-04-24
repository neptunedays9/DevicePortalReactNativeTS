
export const addProductImageService = async (image: any) => {
  
  var response = await fetch('http://10.0.2.2:5000/api/v1/image', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(image)

  });
  var obj = await response.json();
  return (obj);

  // await fetch('http://10.0.2.2:5000/api/v1/image', {
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(image)

  // })
  // .then(async (response) => await response.json())
  // .then(async (response) => {
  //   console.log("R1:" + await response.json())
  //   return (await response.json());
  // })
  // .catch(error => {
  //   console.log(error);
  // });
};

