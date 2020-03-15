import React from "react";
import { Link } from "react-router-dom";

const KickedRoute = () => {
  return (
    <div>
      <p>You have been kicked out from a protected route</p>
      <Link to="/">
        <p>Go to the beginning</p>
      </Link>
    </div>
  );
};

export default KickedRoute;
