const express = require("express");
const authRoutes = require("./routes");
const app = express();

app.use(express.json());
app.use("/api", authRoutes);

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})
app.listen(3000, () => console.log("Server up"))