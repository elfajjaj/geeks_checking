const { Command } = require("commander");
const greet = require("./commands/greet");
const fetchData = require("./commands/fetch");
const readFile = require("./commands/read");

const program = new Command();

program
  .name("ninja-utility")
  .description("A cool Node.js command-line utility")
  .version("1.0.0");

program
  .command("greet <name>")
  .description("Display a colorful greeting")
  .action((name) => {
    greet(name);
  });

program
  .command("fetch")
  .description("Fetch data from a public API")
  .action(() => {
    fetchData();
  });

program
  .command("read <filePath>")
  .description("Read content of a file")
  .action((filePath) => {
    readFile(filePath);
  });

program.parse(process.argv);
