import http, { IncomingMessage, ServerResponse } from "node:http";

const PORT = Number(process.env.PORT);

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      message: "Hello from ars-server !",
      path: req.url,
    })
  );
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});