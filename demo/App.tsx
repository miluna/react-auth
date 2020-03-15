import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider, ProtectedRoute } from "../src";
import KickedRoute from "./KickedRoute";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { getStoredValue } from "./functions";

const App = () => {
  return (
    <AuthContextProvider getStoredAuthValue={getStoredValue}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PublicRoute} />
          <Route exact path="/kicked" component={KickedRoute} />
          <ProtectedRoute exact path="/protected" redirectPath="/kicked" component={PrivateRoute} />
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
