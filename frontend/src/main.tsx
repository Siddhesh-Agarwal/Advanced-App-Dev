import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './globals.css'
import HomePage from './pages/HomePage.tsx'
import SignInPage from './pages/auth/SignInPage.tsx';
import SignUpPage from './pages/auth/SignUpPage.tsx';
import PrivacyPage from './pages/PrivacyPage.tsx';
import NotFoundPage from './pages/NotFound.tsx';
import ThemePage from './pages/ThemePage.tsx';
import EventsPage from './pages/admin/EventsPage.tsx';
import DashboardPage from './pages/admin/Dashboard.tsx';
import ManagePage from './pages/admin/ManagePage.tsx';

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
    path: "/admin",
    element: <DashboardPage />
  },
  {
    path: "/admin/dashboard",
    element: <DashboardPage />
  },
  {
    path: "/admin/events",
    element: <EventsPage />
  },
  {
    path: "/admin/manage",
    element: <ManagePage />
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
