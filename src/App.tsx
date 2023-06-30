import React from "react";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";

import Home from "./page/home";
import List from "./page/list";
import NotFound from "./page/notfound";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "q2", element: <List /> },
    { path: "404", element: <NotFound/> },
  ]);
  return routes;
};
const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;


