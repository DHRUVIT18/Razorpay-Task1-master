const express = require('express');
require("./database/db").connect()
const dotenv=require("dotenv");
const OrderRouter = require("./router/orderRouter");
const UserRouter = require("./router/userRouter");
const app = express();

dotenv.config();
app.use(express.json());
const PORT = process.env.PORT 

app.use(OrderRouter)
app.use(UserRouter)

app.get('/', (req, res) => {
    res.send("hello world!!!!!!!!!")
}),
app.listen(PORT, () => {
    console.log("Server is Listening on Port ", PORT);
});