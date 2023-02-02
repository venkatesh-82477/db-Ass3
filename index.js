const express = require("express");
const bodyParser = require("body-parser");
const connect = require("./database/mongooses")
const employeeRouter = require('./routes/employee')

const app = express();

app.use(bodyParser.json());
app.use(employeeRouter)

app.listen(6000, async () => {
    console.log("Server is started at port 6000");
    console.log("Running the database Connection");
    await connect();
});