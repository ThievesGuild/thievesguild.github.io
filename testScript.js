const mainURL = 'https://getipaddress.dev.with-datafire.io';
const ipQuery = '/getIP?value=';

const ipAddress = document.getElementById('IP').value;

const getIP = () => {
    const queryValue = ipAddress;
    const endpoint = `${mainURL}${ipQuery}${queryValue}`;
    
    fetch(endpoint, {cache: 'no-cache'}).then(response => {
      if (response.ok) {
        return response;
      }
      throw new Error('Request failed!');
    }, networkError => {
      console.log(networkError.message)
    }).then((textResponse) => {
      console.log(textResponse); 
    })
  }