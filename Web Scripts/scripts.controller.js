import { Router } from 'express';
const router = Router(); 

router.get('/', getIP);

async function getIP () {
    console.log(await ipify({useIPv6: false}));
}