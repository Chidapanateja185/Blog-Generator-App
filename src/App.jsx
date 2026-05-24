import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/welcome.jsx';
import NotFound from './components/notfound.jsx';
import Home from './components/Home.jsx';
import Dashboard from './components/Dashboard.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { initializeNotifications } from './api/notificationService.js';

export default function App() {
  useEffect(() => {initializeNotifications();}, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
