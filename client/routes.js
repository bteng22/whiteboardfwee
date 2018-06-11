import React from "react";
import HomePage from "components/HomePage";
import JobPage from "components/JobPage";

export default [
  { path: "/", action: () => <HomePage /> },
  { path: "/job", action: () => <JobPage /> }
];
