var $ = require('jQuery');

$.getJSON("http://api.ipify.org/?format=json", function(e) {
    alert(e.ip);
});