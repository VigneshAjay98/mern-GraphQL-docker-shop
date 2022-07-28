import React, { Component, useContext } from 'react';  
import { UserContext, AppContext } from '../../contexts.js'

class Register extends Component
{  
    static contextType = UserContext
   render() {  
        
      return (  
         <>  
            <section id="aa-myaccount">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="aa-myaccount-area">         
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="aa-myaccount-register"> 
                                            <UserContext.Consumer>
                                               {user => (
                                                    <AppContext.Consumer>
                                                        {app => (
                                                            <>
                                                                <h1>{user}</h1>                
                                                                <h1>{app}</h1> 
                                                            </>  
                                                        )}
                                                    </AppContext.Consumer>
                                               )

                                               } 
                                            </UserContext.Consumer>
                                            <h4>Register</h4>
                                            <form action="" className="aa-login-form">
                                                <label htmlFor="">Username or Email address<span>*</span></label>
                                                <input type="text" placeholder="Username or email" />
                                                <label htmlFor="">Password<span>*</span></label>
                                                <input type="password" placeholder="Password" />
                                                <button type="submit" className="aa-browse-btn">Register</button>                    
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
         </>  
      );  
   }  
}  
export default Register; 