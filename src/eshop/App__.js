import React, { Component } from "react";
import Home from "./Home";
import ContactUs from "./ContactUs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fire from './Fire'
import GuestLayout from './GuestLayout'
import UserForm from './UserForm'

const openRoutes = [
  {
    path: "/contact",
    layout: GuestLayout,
    exact: false,
    component: ContactUs,
  },
  {
    path: "/login",
    layout: GuestLayout,
    exact: false,
    component: UserForm,
  },
  {
    path: "/",
    layout: GuestLayout,
    exact: false,
    component: Home,
  },
];

const App__ = () =>{
  
  
  return (
    <Router>
      <div>
        <Switch>
          {openRoutes.map((route, key) => {
            return (
              <Route
                exact={route.exact}
                path={route.path}
                render={() => (
                  <route.layout>
                    <route.component></route.component>
                  </route.layout>
                )}
              />
            );
          })}
        </Switch>
      </div>
    </Router>

  );
}
  
export default App__;
