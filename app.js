const express = require('express');
const dotenv=require("dotenv");

const UserRouter = require("./router/userRouter");
const OrderRouter = require("./router/orderRouter");
const app = express();

dotenv.config();
require("./database/db").connect()
const PORT = process.env.PORT 
app.use(express.json());

app.use(UserRouter)
app.use(OrderRouter)

app.get('/', (req, res) => {
    res.send("hello world!!!!!!!!!")
}),
app.listen(PORT, () => {
    console.log("Server is Listening on Port ", PORT);
});