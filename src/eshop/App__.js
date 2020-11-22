import React, { Component } from "react";
import Home from "./Home";
import ContactUs from "./ContactUs";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          

          <Switch>
            <Route exact path="/contact" component={ContactUs} />
            <Route exact path="/" component={Home} />
            <Route
              path="*"
              render={
                  (props)=>
                <div>
                  <h2>Error</h2>
                </div>
              }
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
