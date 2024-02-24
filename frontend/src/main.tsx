import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import HomePage from '@/pages/HomePage.tsx'
import SignInPage from '@/pages/auth/SignInPage.tsx';
import SignUpPage from '@/pages/auth/SignUpPage.tsx';
import NotFoundPage from '@/pages/NotFound.tsx';
import ThemesPage from '@/pages/ThemesPage';
import EventsPage from '@/pages/admin/EventsPage.tsx';
import DashboardPage from '@/pages/admin/Dashboard.tsx';
import ManagePage from '@/pages/admin/ManagePage.tsx';
import ProfilePage from '@/pages/user/ProfilePage.tsx';
import './globals.css'

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
    path: "/profile/",
    element: <ProfilePage />
  },
  {
    path: "/user/SignIn/",
    element: <SignInPage />,
  },
  {
    path: "/user/SignUp/",
    element: <SignUpPage />,
  },
  {
    path: "/themes/",
    element: <ThemesPage />
  },
  {
    path: "/admin/",
    element: <DashboardPage />
  },
  {
    path: "/admin/dashboard/",
    element: <DashboardPage />
  },
  {
    path: "/admin/events/",
    element: <EventsPage />
  },
  {
    path: "/admin/manage/",
    element: <ManagePage />
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
