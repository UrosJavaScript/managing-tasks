import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFoundPage from "./layout/pages/notfound";
import LoginPage from "./layout/pages/login";
import RegisterPage from "./layout/pages/register";
import DashboardPage from "./layout/pages/dashboard";
import useAuth from "./context/useAuth";
import { ToastContainer } from "react-toastify";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
     <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />
          }
        />
        <Route
          path="/register"
          element={
            isAuthenticated ? <Navigate to="/dashboard" /> : <RegisterPage />
          }
        />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <DashboardPage /> : <Navigate to="/" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
