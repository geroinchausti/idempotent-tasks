const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { DataBaseClient } = require("./config/db");

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

DataBaseClient.connect((error) =>  {
    if(error) console.error(error);
    console.log("db connected");
});

app.use(cors());

app.use(express.json({ extended: true }));

const port = process.env.PORT || 4000;

app.use("/api/tasks", require("./routes/tasksRouter"));


app.listen(port, "0.0.0.0", () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});
