import './index.css'
import App from './App.jsx'
import Home from './routes/home/page.jsx'
import Consoles from './routes/consoles/page.jsx'
import GamesList from './routes/jogos/page.jsx'
import store from './redux/store'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/consoles",
        element: <Consoles />,
      },
      {
        path: "/jogos",
        element: <GamesList />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
