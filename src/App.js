import React, { Component , useEffect} from "react";
import Home from "./eshop/Home";
import ContactUs from "./eshop/ContactUs";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import UserForm from "./eshop/UserForm";
import GuestLayout from "./eshop/comp/GuestLayout";
import fire from '../src/app/utils/firebase';
import UserLoginForm from './eshop/UserLoginForm'
//fire.auth().signOut()


const openRoutes = [
  {
    path: "/contact",
    layout: GuestLayout,
    exact: false,
    component: ContactUs,
  },
  {
    path: "/register",
    layout: GuestLayout,
    exact: false,
    component: UserForm,
  },
  {
    path: "/login",
    layout: GuestLayout,
    exact: false,
    component: UserLoginForm,
  },
  {
    path: "/",
    layout: GuestLayout,
    exact: false,
    component: Home,
  },
];
const  App = () =>{

  useEffect(() => {
    fire.auth().onAuthStateChanged((user)=>{
          console.log('user loged in  FROM APPJS',user);
    },error=>{

    })
  }, [])
   
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
export default App;
