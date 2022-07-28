import React, { Component } from 'react';  
import { Link } from "react-router-dom";

class LoginModal extends Component
{  
   render() {  
      return (  
            <>  
                <div className="modal fade" id="login-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content">                      
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4>Login or Register</h4>
                            <form className="aa-login-form" action="">
                                <label htmlFor="email">Username or Email address<span>*</span></label>
                                <input type="text" placeholder="Username or email" name="email" id="email" />
                                <label htmlFor="password">Password<span>*</span></label>
                                <input type="password" placeholder="Password" name="password" id="password" />
                                <button className="aa-browse-btn" type="submit">Login</button>
                                <div className="aa-register-now">
                                    Don't have an account?<Link to="/register">Register now!</Link>
                                </div>
                            </form>
                        </div>                        
                    </div>
                    </div>
                </div>
            </>  
      );  
   }  
}  

export default LoginModal; 