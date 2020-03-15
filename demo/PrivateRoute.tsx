import React from "react";
import { logout } from "./functions";

const PrivateRoute = () => {
  return (
    <div>
      <p>You are in the protected route!!</p>
      <p>At this point you can refresh this page to check that you keep logged in</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default PrivateRoute;
