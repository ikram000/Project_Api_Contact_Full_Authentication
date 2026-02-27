import { Contact } from "../Models/contact.js";

// get all contact
export const getAllContact = async (req, res) => {
    const userContact = await Contact.find();

    if (!userContact) return res.json({ message: "no contact exit", success: false })

    res.json({ message: "All contact Fetched", userContact })
}


//create new contact
export const newcontact = async (req, res) => {

    const { name, email, phone, type } = req.body;

    if (name == "" || email == "" || phone == "" || type == "")

        return res.json({ message: "All feilds are required", success: false })

    let saveContact = await Contact.create({
        name,
        email,
        phone,
        type,
    });

    res.json({ message: "contact saved succesfully..", saveContact, success: true })
};

// update contact by id

export const updateContactBYId = async (req, res) => {
    const id = req.params.id
    const { name, email, phone, type } = req.body;

    let updatedContact = await Contact.findByIdAndUpdate(id, {
        name,
        email,
        phone,
        type,
    },
        { new: true });

    if (!updatedContact) return res.json({ message: "no contact exit", success: false })

    res.json({ message: "contact updated succesfully", updatedContact, success: true })
};

// delete by id 

export const deleteContactById = async (req, res) => {
    const id = req.params.id;
    let deleteContact = await Contact.findByIdAndDelete(
        id )

    if (!deleteContact)
        return res.json({ message: "no contact deleted", success: false })
    res.json({ message: "delete successfully", success: true })
}


// get contact by id
export const getContactById = async (req, res) => {
    const id = req.params.id


    const userContact = await Contact.findById(id);

    if (!userContact) return res.json({ message: "no contact find ", success: "true" })

    res.json({ message: "Contact fetched", userContact, success: true })

}