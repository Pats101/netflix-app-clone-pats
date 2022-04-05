const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/Auth");
const usersRoute = require("./routes/Users");
const movieRoute = require("./routes/Movies");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useunifiedTopology: true,
        useNewUrlParser: true,
        useunifiedTopology: true,
    })
    .then(()=> console.log("DB Connection Successfull!"))
    .catch(err=> console.log(err));

app.use(express.json());

app.use("/api/Auth", authRoute);
app.use("/api/Users", usersRoute);
app.use("/api/Movies", movieRoute);

app.listen(8800, ()=>{
    console.log("Backend Server is running!");
});