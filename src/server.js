const { Tasks } = require("./models");
const app = require("./app.js");

app.listen(3000, () => {
  console.log("App is running at http://localhost:3000");
});
