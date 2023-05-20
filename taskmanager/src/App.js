import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
    
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
    
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
