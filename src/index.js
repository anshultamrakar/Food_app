import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from "./Components/Error" 

import {createBrowserRouter , RouterProvider} from "react-router-dom"
import Body from './Components/Body';


const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    errorElement : <Error/>,
    children : [
      {
        path : "/",
        element : <Body/>
      },
      {
        path : "/about",
        element : <About/>
      },
      {
        path : "/contact",
        element : <Contact/>
      }
    ]
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {appRouter}/>
  </React.StrictMode>
);

