import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthRoute from "./components/modules/AuthRoute/AuthRoute";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/login/Login";
import Dashboard from "./components/pages/Dashboard";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Mainlayout from "./layouts/Mainlayout/Mainlayout";


const router = createBrowserRouter([
  {
    path : "/",
    element : <Home/>
  },
  {
    path : "/authroute",
    element : <AuthRoute><Dashboard/></AuthRoute>
  },
  {
    path : "/login",
    element : <Login/>
  },
  {
    path : "/mainlayout",
    element : <Mainlayout/>,
    children : [
      {
        path : "/mainlayout/about",
        element : <About/>
      },
      {
        path : "/mainlayout/contact",
        element: <Contact/>
      }
    ]
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
