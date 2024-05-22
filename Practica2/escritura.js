const { error } = require("console");
const fs = require("fs");

fs.writeFile("archivo1.txt", "Hola mundo!", (error) => {
  if (error) {
    console.log("Error: ${error}");
  }
});

fs.appendFile("archivo1.txt", "\nEstamos aprendiendo NodeJS", (error) => {
  if (!error) {
    console.log("Contenido agregado al archivo");
  } else {
    console.log("Error: ${error}");
  }
});
