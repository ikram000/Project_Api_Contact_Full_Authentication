import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'express';
import userRouter from './Routes/user.js'
import contactRouter from'./Routes/contact.js'
import { config } from 'dotenv';
// .env setup
config({path: '.env'});
const app = express();
app.use(bodyParser.json())

//user Route

app.use('/api/user',userRouter);

//contact Router
app.use('/api/contact', contactRouter)

//home route

app.get('/', (req, res) => {
    res.json({ message: 'this is home router' })
})






mongoose.connect(
    process.env.MONG_URL
    , {
    dbName: "NodeJs_Mastery_Course"

}).then(() => {
    console.log("Mongodb connected..!")
}).catch((err) => {
    console.log(err)
})

const port = process.env.PORT;
app.listen(port, () => console.log(`server is running on port ${port}`))