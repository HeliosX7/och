const Sequelize = new require("sequelize");

const sequelize = new Sequelize("ocl", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully.");
  });
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
