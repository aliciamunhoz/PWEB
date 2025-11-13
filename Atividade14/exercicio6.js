let http = require("http");
let server = http.createServer(function (req, res) {
  res.end(
    <http>
      <body>Site da Fatec Sorocaba</body>
    </http>
  );
});
server.listen(3000);
