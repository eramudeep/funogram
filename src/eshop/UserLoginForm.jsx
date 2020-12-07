import React from 'react'
import { Form } from 'react-bootstrap';
import fire from '../app/utils/firebase' 
import './css/style.css'



const onSubmit=async (e)=>{
  e.preventDefault()  
  //e.target.Username.value 
   await fire.auth().signInWithEmailAndPassword(e.target.Email.value , e.target.Password.value )
  .then((user) => {    
    console.log("user found");
//inseert into database  
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("User not found")
    // ..
  }); 

}
const UserLoginForm = ()=> {
    return(
        <div className="container userLoginForm">
            <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Login</h4>
                <p className="card-description"> User Information </p>
                <form onSubmit={onSubmit} className="forms-sample">
                 
                  <Form.Group>
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <Form.Control  name={"Email"}  type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <Form.Control  name={"Password"}  type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </Form.Group>
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input"/>
                      <i className="input-helper"></i>
                      Remember me
                    </label>
                  </div>
                  
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                  <button className="btn btn-light">Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>



      
        </div>


    )
}


export default UserLoginForm;
