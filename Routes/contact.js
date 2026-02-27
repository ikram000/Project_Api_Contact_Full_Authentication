import express from "express";
import { deleteContactById, getAllContact, getContactById, newcontact, updateContactBYId } from "../Controllers/contact.js";

 import { isAuthenticated } from "../Middlewares/Auth.js";
const router = express.Router();

// new contact 
// @api desc :- creating contact
// @api methode :- post
//@api endpoint :- /api/contact/new

router.post('/new',isAuthenticated, newcontact)

// get all contact

router.get('/', getAllContact)

//get contact by id

router.get('/:id', getContactById)

// updated contact by id 
router.put('/:id', updateContactBYId)


// delete contact by id 

router.delete('/:id',deleteContactById)

export default router;