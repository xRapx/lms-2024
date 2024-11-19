import { Navigate, useLocation } from "react-router-dom";
import { Fragment, useContext } from "react";
import { AuthContext } from "@/context/auth-context";

function RouteGuard({ element }) {
  const location = useLocation();
  const { auth } = useContext(AuthContext);

  const authenticated = auth?.authenticate;
  const user = auth?.user;

  console.log(authenticated, user, "useruser");

  if (!authenticated && !location.pathname.includes("/auth")) {
    return <Navigate to="/auth" />;
  }

  if (authenticated && user?.role === "admin") {
    return <Fragment>{element}</Fragment>;
  }

  if (authenticated && user?.role === "user" && location.pathname.includes("/dashboard")) {
    return <Navigate to="/home" />;
  }

  return <Fragment>{element}</Fragment>;
}

export default RouteGuard;
