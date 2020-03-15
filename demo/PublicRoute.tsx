import React from "react";
import { login, logout } from "./functions";
import { Link } from "react-router-dom";
import { ProtectedComponent, useAuth } from "../src";

const PublicRoute = () => {
  const { isAuth } = useAuth();
  return (
    <div>
      <p>{`Auth Status: ${isAuth}`}</p>
      <Link to="/protected">
        <p>Try go to the protected route</p>
      </Link>
      <button onClick={login}>Log In</button>
      <button onClick={logout}>Log Out</button>
      <p>Here's a protected component:</p>
      <ProtectedComponent>
        <p>You are seeing the protected component!!</p>
      </ProtectedComponent>
    </div>
  );
};

export default PublicRoute;
