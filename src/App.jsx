// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Layout from './components/Layout';

import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Certificates from './pages/Certificates';
import SupportTicketRequest from './pages/InspectionRequest';
import SurveyStatus from './pages/SurveyStatus';
import EngineerDashboard from './pages/EngineerDashboard';
import AssignedEngineer from './pages/AssignedEngineer';

const App = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl bg-white text-gray-800">
        ⏳ در حال بارگذاری...
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {!user ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <>
            <Route
              path="/"
              element={
                <Layout>
                  <Dashboard />
                </Layout>
              }
            />
            <Route
              path="/certificates"
              element={
                <Layout>
                  <Certificates />
                </Layout>
              }
            />
            <Route
              path="/inspection-request"
              element={
                <Layout>
                  <SupportTicketRequest />
                </Layout>
              }
            />
            <Route
              path="/status"
              element={
                <Layout>
                  <SurveyStatus />
                </Layout>
              }
            />
            <Route
              path="/engineer-dashboard/:name"
              element={
                <Layout>
                  <EngineerDashboard />
                </Layout>
              }
            />
            <Route
              path="/assigned/:id"
              element={
                <Layout>
                  <AssignedEngineer />
                </Layout>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
