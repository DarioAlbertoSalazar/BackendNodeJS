const fs = require("fs");

const readStream = fs.createReadStream("./archivo1.txt");
readStream.on("data", (chunk) => {
  console.log(`Recibor ${chunk.length} bytes de datos`);
  console.log(chunk.toString());
});

readStream.on("end", () => {
  console.log("No hay mas datos para leer");
});
