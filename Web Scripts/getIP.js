var http = require('http');

http.get({ 'host': 'api.ipify.org', 'port': 80, 'path': '/' }, function (resp) {
    resp.on('data', function (ip) {
        console.log("My public IP address is: " + ip);
        document.getElementById("IP").innerHTML = ip;
        const fetchURL = `https://ipapi.co/${ip}/json/`;
        fetch(fetchURL)
            .then(function (response) {
                response.json().then(jsonData => {
                    document.getElementById("location").innerHTML = JSON.stringify(jsonData.ip);
                });
            })
            .catch(function (error) {
                console.log(error)
            });
    });
});

