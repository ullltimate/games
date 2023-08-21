import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.tsx';
import ChooseGame from './components/ChooseGame.tsx';
import TttGame from './components/tttGame.tsx';
import RpsGame from './components/rpsGame.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/games",
    element: <ChooseGame />,
    errorElement: <ErrorPage />
  },
  {
    path: "/tic-tac-toe",
    element: <TttGame />,
    errorElement: <ErrorPage />
  },
  {
    path: "/rock-paper-scissors",
    element: <RpsGame />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
