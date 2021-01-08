const mainURL = 'https://getipaddress.dev.with-datafire.io';
const ipQuery = '/getIP?value=';

const ipAddress = JSON.stringify(document.getElementById('IP').value);

const getIP = () => {
    const queryValue = ipAddress;
    const endpoint = `${mainURL}${ipQuery}${queryValue}`;
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'text';
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            console.log(xhr.response);
        }
    }
    xhr.open('GET', endpoint);
    xhr.send()
}

getIP();

/*
const ipAddress = fetch("https://api.ipify.org/?format=json").then(response => {
    if (response.ok) {
        return JSON.stringify(response);
    }
    throw new Error('Request failed!');
}, networkError => {
    console.log(networkError.message)
});

const mainURL = 'https://getipaddress.dev.with-datafire.io';
const ipQuery = '/getIP?value=';

const queryValue = ipAddress;
const endpoint = `${mainURL}${ipQuery}${queryValue}`;

fetch(endpoint).then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Request failed!');
}, networkError => {
    console.log(networkError.message)
}).then((jsonResponse) => {
    console.log(JSON.stringify(jsonResponse));
});
*/

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