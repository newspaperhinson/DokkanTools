import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// import components
import Root from './components/Root';

// import pages
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
