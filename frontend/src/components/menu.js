import React from 'react'; 
import { useQuery, useMutation } from '@apollo/client';
import logoutUser from '../graphQL/mutations/logoutUser.js';
import currentUser from '../graphQL/queries/currentUser.js';
import { Link } from "react-router-dom";

const Menu = () => {
    const [logout, object] = useMutation(logoutUser);
    const { loading, error, data } = useQuery(currentUser);

    const logoutHandler = () => {
        logout().then(() => 
            window.location.href = window.location.origin + "/login"
        )
    }

    return(  
        <>  
            <section id="menu">
                <div className="container">
                <div className="menu-area">
                    <div className="navbar navbar-default" role="navigation">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            </button>          
                        </div>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/cart">Cart</Link>
                                </li>
                                <li>
                                    <a href="/api">API</a>
                                </li>
                                <li>
                                    <Link to="/account">Dashboard</Link>
                                </li>
                                <li>
                                    <Link to="/account/profile">Profile</Link>
                                </li>
                                {
                                    !data &&
                                    <>
                                        <li>
                                            <Link to="/login">Login</Link>
                                        </li>
                                        <li>
                                            <Link to="/register">Register</Link>
                                        </li>
                                    </>
                                }
                                {
                                    data &&
                                    <li>
                                        <a href="javascript:void(0)" onClick={logoutHandler}>Logout</a>
                                    </li>
                                }
                            </ul>
                        </div>
                    </div>
                </div> 
                </div>
            </section>
        </>  
    );
}
export default Menu