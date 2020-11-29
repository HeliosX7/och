import GradeReport from "../views/och/gradeReport";
import RegCourses from "../views/och/registeredCourses";
import CourseRegistration from "../views/och/registration";

const ochRoutes = [
  {
    path: "/course_register",
    name: "Course Reg",
    component: CourseRegistration,
    exact: true,
  },
  {
    path: "/reg_courses",
    name: "Alloted Courses",
    component: RegCourses,
    exact: true,
  },
  {
    path: "/AttList",
    name: "AttList",
    //component: FellowEdit,
    exact: true,
  },
  {
    path: "/GradeList",
    name: "GradeList",
    component: GradeReport,
    exact: true,
  },
];
export default ochRoutes;
