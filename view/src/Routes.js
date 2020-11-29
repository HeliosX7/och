/* here we add all routes module wise */
import fellowRoutes from "./Routes/fellowshipRoutes";
import ochRoutes from "./Routes/ochRoutes";
const routes = [];

/* fellowship routes */
for (let i = 0; i < fellowRoutes.length; i++) {
  routes.push(fellowRoutes[i]);
}

//och
for (let i = 0; i < ochRoutes.length; ++i) {
  routes.push(ochRoutes[i]);
}

export default routes;
