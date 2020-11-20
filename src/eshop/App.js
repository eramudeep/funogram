import React, {Component} from 'react'
import Home from './Home'
import ContactUs from './ContactUs'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class App extends Component{
    render(){
        return(
            <div>
                <Router>
                    <switch>
                        <Route exact path = {"/"} component={Home}> </Route>
                        <Route exact path = {"/Contact"} component={ContactUs}/>


                       
                    </switch>
                </Router>
              
                <Home/>

            </div>
        )
    }
}
export default App;
