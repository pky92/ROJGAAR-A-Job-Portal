import React from 'react';
import { ThemeProvider } from './components/themeprovider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import LandingPage from './pages/LandingPage';
import OnBoarding from './pages/OnBoarding';
import JobListing from './pages/JobListing';
import Job from './pages/Job';
import MyJobs from './pages/MyJobs';
import SavedJobs from './pages/SavedJobs';
import PostJobs from './pages/PostJobs';



function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: '/', element: <LandingPage /> },
        { path: '/onboarding', element: <OnBoarding /> },
        { path: '/jobs', element: <JobListing /> },
        { path: '/job/:id', element: <Job /> },
        { path: '/my-jobs', element: <MyJobs /> },
        { path: '/saved-jobs', element: <SavedJobs /> },
        { path: '/post-jobs', element: <PostJobs /> },
      ],
    },
  ]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
