import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import DataEntry from "./pages/DataEntry";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Loading...</p>;

  // Function to check email verification
  const isVerified = user && user.emailVerified;

  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />

        <Route
          path="/"
          element={
            !user ? (
              <Login />
            ) : isVerified ? (
              <Navigate to="/data-entry" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={
            !user ? (
              <Login />
            ) : isVerified ? (
              <Navigate to="/data-entry" />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/data-entry"
          element={
            user && isVerified ? <DataEntry /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/dashboard"
          element={
            user && isVerified ? <Dashboard /> : <Navigate to="/login" />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
