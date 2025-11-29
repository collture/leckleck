const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.write(`
    <div style="text-align: center; font-family: Arial; margin-top: 40px;">
      <h1>Your Nendrhic Eau R. Landichp</h1>
      <h2>Your BSIT SM 4102</h2>
      <p style="font-size: 20px; font-style: italic; margin-top: 20px;">
        "If you can dream it, you can do it."
      </p>
    </div>
  `);

  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
