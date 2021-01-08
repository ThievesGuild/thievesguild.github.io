const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use('/', require("./scripts.controller"));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on ${port}`));