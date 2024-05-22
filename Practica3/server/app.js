const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const path = url.parse(req.url, true).pathname;
  if (req.method == "GET") {
    switch (path) {
      case "/salones":
        res.write("Todos los salones: ");
        break;
      case "/alumnos":
    }
  }

  if (req.method == "POST") {
    console.log("POST");
  }
});

server.listen(3000, () => {
  console.log("server is up");
});
