require("dotenv").config();

const app = require("./app");
require("./database");

async function main() {
  await app.listen(app.get("port"));
  console.log("Servidor funcionando en el Puerto:", app.get("port"));
}

main();