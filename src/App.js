import React, { useEffect } from "react";
import "./App.css";
import Login from "./pages/login/Login";
import ChangePassword from "./pages/login/ChangePassword";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Clients from "./pages/clients/Clients";
import Partners from "pages/partners/Partners";
import Finances from "pages/finances/Finances";
import Dashboard from "pages/dashboard/Dashboard";
import Subscriptions from "pages/subscriptions/Subscriptions";
import ClientProfile from "pages/clientProfile/ClientProfile";
import CategoryModeration from "pages/categoryModeration/CategoryModeration";
import { refreshToken, checkToken } from "store/authSlice";
import PartnerProfile from "./pages/partnerProfile/PartnerProfile";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route
            path="/clients"
            element={
              <RequireAuth redirectTo="/">
                <Clients />
              </RequireAuth>
            }
          />
          <Route
            path="/partners"
            element={
              <RequireAuth redirectTo="/">
                <Partners />
              </RequireAuth>
            }
          />
          <Route
            path="/finances"
            element={
              <RequireAuth redirectTo="/">
                <Finances />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth redirectTo="/">
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/subscriptions"
            element={
              <RequireAuth redirectTo="/">
                <Subscriptions />
              </RequireAuth>
            }
          />
          <Route
            path="/moderation"
            element={
              <RequireAuth redirectTo="/">
                <CategoryModeration />
              </RequireAuth>
            }
          />
          <Route
            path="/clients/profile/:id"
            element={
              <RequireAuth redirectTo="/">
                <ClientProfile />
              </RequireAuth>
            }
          />
          <Route
            path="/partners/profile/:id"
            element={
              <RequireAuth redirectTo="/">
                <PartnerProfile />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

function RequireAuth({ children, redirectTo }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkToken()).then((result) => {
      if (result.payload.message === "Токен истёк") {
        dispatch(refreshToken());
      }
    });
  }, []);
  const { loggedIn } = useSelector((state) => state.auth);
  return loggedIn ? children : <Navigate to={redirectTo} />;
}

export default App;
