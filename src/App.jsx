import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/welcome.jsx';
import NotFound from './components/notfound.jsx';
import Home from './pages/Home.jsx';
import Explore from './pages/Explore.jsx'
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import BlogPage from "./components/Blog/BlogPage.jsx";

import ForgotPassword from './components/ForgotPassword.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { initializeNotifications } from './api/notificationService.js';
import DashboardShell from "./components/dashboard/DashboardShell.jsx";

export default function App() {

  useEffect(() => {initializeNotifications();}, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/explore" element={<Explore />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/blog/:id" element={<BlogPage />} />

        {/* <Route path="/dashboard" element={<Dashboard />} /> */}

        <Route path="/dashboard" element={<DashboardShell /> } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
