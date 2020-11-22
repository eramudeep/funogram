import React, {Component} from 'react'
import Home from './eshop/Home'
import ContactUs from './eshop/ContactUs'
import { BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";

class App extends Component{
    
    render(){
        console.log("this", this.props);
        return( 
            <Router>
            <div>
              <Switch>               
                <Route path="/contact" component={ContactUs} />   
                <Route path="/" component={Home} />   
              </Switch>
            </div>
          </Router>
         

            
        )
    }
}
export default App;
