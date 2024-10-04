import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import StateDetail from './components/StateDetail.jsx'
import './App.css'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/:state",
        element:<StateDetail/>
      }
    ]
  }
]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
const root = createRoot(document.querySelector("#root"));
//root.render(<App />);
root.render(<RouterProvider router={router} />);
