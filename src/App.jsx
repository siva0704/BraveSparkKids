import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import AboutPage from './pages/AboutPage';
import Desktop1 from './pages/Desktop1';
import Frame11 from './pages/Frame11';
import Frame14 from './pages/Frame14';
import Frame6 from './pages/Frame6';
import Group10 from './pages/Group10';
import Group16 from './pages/Group16';
import Group8 from './pages/Group8';
import HomePage from './pages/HomePage';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/AboutPage', element: <AboutPage /> },
{ path: '/Desktop1', element: <Desktop1 /> },
{ path: '/Frame11', element: <Frame11 /> },
{ path: '/Frame14', element: <Frame14 /> },
{ path: '/Frame6', element: <Frame6 /> },
{ path: '/Group10', element: <Group10 /> },
{ path: '/Group16', element: <Group16 /> },
{ path: '/Group8', element: <Group8 /> },
{ path: '/HomePage', element: <HomePage /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}