const mainURL = 'https://getipaddress.dev.with-datafire.io';
const ipQuery = '/getIP?value=';

const getIP = async() => {
    try {
        const response = await fetch("https://api.ipify.org/?format=json") 
        if (response.ok) { 
            return JSON.stringify(jsonResponse); 
        }
    } catch (error) {
      console.log(error); 
    }
}

const sendIP = async() => {
    const queryValue = await getIP();
    const endpoint = `${mainURL}${ipQuery}${queryValue}`;
    try {
        const response = await fetch(endpoint) 
        if (response.ok) {
            console.log(response); 
            return response; 
        }
    } catch (error) {
      console.log(error); 
    }
}

/*
fetch(endpoint).then(response => {
    if (response.ok) {
        return response;
    }
    throw new Error('Request failed!');
}, networkError => {
    console.log(networkError.message)
}).then((textResponse) => {
    console.log(textResponse);
});
*/