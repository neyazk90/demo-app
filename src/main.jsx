import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router";

import { appRoutes } from "./Routes";
import App from './App.jsx'
import './index.css'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={appRoutes} />);
