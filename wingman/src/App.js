import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './hooks/AuthContext';
import PrivateRoute from './components/PrivateRoute';

// Public Pages
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';

// Protected Pages
import Setup from './pages/Setup';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Wingman from './pages/Wingman';
import Takeoff from './pages/Takeoff';
import Landing from './pages/Landing';

import './styles/App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
          <div className="content">
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<About />} />

              {/* Protected Routes */}
              <Route
                path="/setup"
                element={
                  <PrivateRoute>
                    <Setup />
                  </PrivateRoute>
                }
              />
              <Route
                path="/home"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/wingman"
                element={
                  <PrivateRoute>
                    <Wingman />
                  </PrivateRoute>
                }
              />
              <Route
                path="/takeoff"
                element={
                  <PrivateRoute>
                    <Takeoff />
                  </PrivateRoute>
                }
              />
              <Route
                path="/landing"
                element={
                  <PrivateRoute>
                    <Landing />
                  </PrivateRoute>
                }
              />

              {/* Redirect root to home */}
              <Route path="/" element={<Navigate to="/home" replace />} />

              {/* Catch all route for 404 */}
              <Route
                path="*"
                element={
                  <div className="not-found">
                    <h1>404: Page Not Found</h1>
                    <p>The page you're looking for doesn't exist.</p>
                  </div>
                }
              />
            </Routes>
          </div>
      </Router>
    </AuthProvider>
  );
}

export default App;