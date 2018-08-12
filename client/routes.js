import React from 'react';
import HomePage from 'components/HomePage';
import JobPage from 'components/JobPage';
import Signup from 'components/Signup';

export default [
  { path: '/', action: () => <HomePage /> },
  { path: '/job', action: () => <JobPage /> },
  { path: '/signup/referer', action: () => <Signup /> }
];
