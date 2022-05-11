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
import { ROUTES } from "./constants/ROUTES";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={ROUTES.MAIN} element={<Login />} />
          <Route path={ROUTES.CHANGE_PASSWORD} element={<ChangePassword />} />
          <Route
            path={ROUTES.CLIENTS}
            element={
              <RequireAuth redirectTo={ROUTES.MAIN}>
                <Clients />
              </RequireAuth>
            }
          />
          <Route
            path={ROUTES.PARTNERS}
            element={
              <RequireAuth redirectTo={ROUTES.MAIN}>
                <Partners />
              </RequireAuth>
            }
          />
          <Route
            path={ROUTES.FINANCES}
            element={
              <RequireAuth redirectTo={ROUTES.MAIN}>
                <Finances />
              </RequireAuth>
            }
          />
          <Route
            path={ROUTES.DASHBOARD}
            element={
              <RequireAuth redirectTo={ROUTES.MAIN}>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path={ROUTES.SUBSCRIPTIONS}
            element={
              <RequireAuth redirectTo={ROUTES.MAIN}>
                <Subscriptions />
              </RequireAuth>
            }
          />
          <Route
            path={ROUTES.MODERATION}
            element={
              <RequireAuth redirectTo={ROUTES.MAIN}>
                <CategoryModeration />
              </RequireAuth>
            }
          />
          <Route
            path={ROUTES.DYNAMIC_CLIENT_ID}
            element={
              <RequireAuth redirectTo={ROUTES.MAIN}>
                <ClientProfile />
              </RequireAuth>
            }
          />
          <Route
            path={ROUTES.DYNAMIC_PARTNER_ID}
            element={
              <RequireAuth redirectTo={ROUTES.MAIN}>
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
