require("dotenv").config();
const express = require("express");
const Task = require("./task.js");
const sequelize = require("./sequelize_conn.js");

const app = express();
const port = process.env.PORT || 3000;

sequelize.sync();

app.use(express.json());

app.get("/task", async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

app.put("/task/:id", async (req, res) => {
  const affectedRow = await Task.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ message: `Actualizado: ${affectedRow}` });
});

app.post("/task", async (req, res) => {
  const task = await Task.create(req.body);
  //res.json({id:2323, name:"task-name"})
  res.json(task);
});

app.delete('/task/:id', async(req, res)=>{
    const deleteRow = await Task.destroy({
        where: { id: req.params.id}
    })
    res.json({message: 'Deleted: ' + deleteRow})
})

app.listen(port, () => {
  console.log("Server running on", port);
});

module.exports = app