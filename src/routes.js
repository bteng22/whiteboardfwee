import React from "react";
import App from "./App";
import JobPage from "components/JobPage";

export default [
  { path: "/", action: () => <App /> },
  { path: "/job", action: () => <JobPage /> }
];
