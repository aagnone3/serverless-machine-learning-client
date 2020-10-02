import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";

export default function AuthenticatedRoute({ children, ...rest }) {
  // obtain the current path, to redirect again upon successful login
  const { pathname, search } = useLocation();

  const { isAuthenticated } = useAppContext();
  /*
    Render children only when the user is authenticated.
    When not authenticated, redirect to login with a back-redirect to the requested page.
  */
  return (
    <Route {...rest}>
      {isAuthenticated ? (
        children
      ) : (
        <Redirect to={
          `/login?redirect=${pathname}${search}`
        } />
      )}
    </Route>
  );
}