import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/login.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/products",
    element:<Products/>
  },{
    path:"/login",
    element:<Login/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
     <RouterProvider router={router} />
  </>,
)
