let http = require("http");
let server = http.createServer(function (req, res) {
  let opcao = req.url;
  if (opcao == "/historia") {
    res.end("<html><body>Historia Fatec Sorocaba!</body></html>");
  } else if (opcao == "/curso") {
    res.end("<html><body>Cursos</body></html>");
  } else if (opcao == "/professores") {
    res.end("<html><body>Professores</body></html>");
  } else {
    res.end("<html><body>Bem-vindo à Fatec Sorocaba!</body></html>");
  }
});
server.listen(3000);
