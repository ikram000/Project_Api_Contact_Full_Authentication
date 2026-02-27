import express from 'express'
import { register,Login } from '../Controllers/user.js';


const router= express.Router();

// user register
// @api desc :- user register
// @api methode :- post
//@api endpoint :- /api/user/register

router.post ('/register', register);

// user Login
// @api desc :- user Login
// @api methode :- post
//@api endpoint :- /api/user/Login

router.post ('/Login', Login);
export default router