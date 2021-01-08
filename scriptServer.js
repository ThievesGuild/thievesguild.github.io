const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use('/getIP', function(req, res) {
    ipAddress = req.query.value;
    res.send(console.log(ipAddress));
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on ${port}`));