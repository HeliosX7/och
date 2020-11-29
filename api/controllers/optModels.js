/*
const models = require("../Models");
const { DataTypes } = require("sequelize");

const optModel = models.define("optionalCourse", {
  id: DataTypes.TEXT,
  name: DataTypes.TEXT,
  departmentId: DataTypes.TEXT,
});

const selectOptCourses = async (data) => {
  // console.log(data);
  const fields = ["id", "name", "dept_id"];
  const responses = await INF.findAll({
    attributes: fields,
  });
  return responses[0];
};

module.exports = {
  selectOptCourses,
};
*/
