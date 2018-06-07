import React from 'react';
import App from './App';
import PostJob from 'components/PostJob';

export default [
  { path: '/', action: () => <App /> },
  { path: '/post', action: () => <PostJob /> }
];