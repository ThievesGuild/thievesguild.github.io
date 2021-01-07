fetch('https://ipapi.co/8.8.8.8/json/')
.then(function(response) {
  response.json().then(jsonData => {
    document.getElementById("demo").innerHTML = JSON.stringify(jsonData.ip);
  });
})
.catch(function(error) {
  console.log(error)
});