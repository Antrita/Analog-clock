// src/App.jsx
import React from 'react';
import { RouterProvider } from 'react-router-dom';
//import router from '.';  // Change import path to './routes'
import router from './routes/Routes.jsx'

function App() {
  return <RouterProvider router={router} />;
}

export default App;