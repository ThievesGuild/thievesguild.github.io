const express = require('express');
const router = express.Router();

router.get('/', getIP);

module.exports = router;

async function getIP () {
    console.log(await ipify({useIPv6: false}));
}