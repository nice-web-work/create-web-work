const path = require("path");
require("module-alias").addAlias("@", path.resolve(__dirname, "../"));

process.on("uncaughtException", (error) => {
  console.log(error);
  process.exit(0);
});

process.on("unhandledRejection", (error) => {
  console.log(error);
  process.exit(0);
});