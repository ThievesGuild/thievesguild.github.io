const express = require('express');
const router = express.Router();
const ipify = require('ipify');

router.get('', getIP);

module.exports = router;

async function getIP () {
    console.log(await ipify({useIPv6: false}));
}