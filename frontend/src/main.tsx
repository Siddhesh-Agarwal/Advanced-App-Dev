import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
// import { Provider } from 'react-redux'
// import { configureStore } from '@reduxjs/toolkit'
import HomePage from './pages/HomePage.tsx'
import SignInPage from './pages/auth/SignInPage.tsx';
import SignUpPage from './pages/auth/SignUpPage.tsx';
import PrivacyPage from './pages/PrivacyPage.tsx';
import NotFoundPage from './pages/NotFound.tsx';
import ThemePage from './pages/ThemePage.tsx';
import DashboardPage from './pages/admin/DashboardPage.tsx';

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFoundPage />
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/privacy",
    element: <PrivacyPage />,
  },
  {
    path: "/user/SignIn",
    element: <SignInPage />,
  },
  {
    path: "/user/SignUp",
    element: <SignUpPage />,
  },
  {
    path: "/themes",
    element: <ThemePage />
  },
  {
    path: "/admin/dashboard",
    element: <DashboardPage />
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <RouterProvider router={router} />
    {/* </Provider> */}
  </React.StrictMode>,
)
