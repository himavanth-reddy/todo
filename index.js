const app = require("./app");
const sequelize = require("./config/database");
sequelize.sync();
app.listen(3000, console.log("server is up"));
