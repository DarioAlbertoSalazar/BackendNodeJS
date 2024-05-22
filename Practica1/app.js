const http = require("http");
const url = require("url");
const querystring = require("querystring");

const server = http.createServer((req, res) => {
  const method = req.method;
  const parsedUrl = url.parse(req.url);
  const path = parsedUrl.pathname;
  const query = querystring.parse(parsedUrl.query);

  if (method === "GET") {
    if (path === "/saludo") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hola " + (query.nombre || "desconocido"));
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Ruta no encontrada");
    }
  } else if (method === "POST") {
    if (path === "/mensaje") {
      let body = "";
      req.on("data", chunk => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const mensaje = querystring.parse(body).mensaje;
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Tu mensaje fue: " + mensaje);
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Ruta no encontrada");
    }
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Metodo no permitido");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Servidor corriendo en http://127.0.0.1:3000/");
});
