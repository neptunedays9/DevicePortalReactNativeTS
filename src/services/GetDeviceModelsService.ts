
export const getDeviceModelsService = async () => {
  
    var response = await fetch('http://10.0.2.2:5000/api/v1/device/models', {
      method: 'GET'
    });
    var obj = await response.json();
    console.log(obj)
    return (obj);
}
  