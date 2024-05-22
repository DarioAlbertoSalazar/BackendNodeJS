const express = require("express");
const app = express();
const port = 3003;

app.get("/", (req, res) => {
  res.send("Hola mundo! Este es mi primer microservicio");
});

app.listen(port, ()=>{
    console.log("The app is running on", port)
})