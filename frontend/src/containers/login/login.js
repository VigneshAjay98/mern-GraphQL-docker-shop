import React, { useEffect, useState } from 'react';  
import { useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client';
import currentUser from '../../graphQL/queries/currentUser.js';
import loginUser from '../../graphQL/mutations/loginUser.js';

const Login = () => {  

	const [state, setState] = useState({
		user: null,
		email: '',
		password: ''
	})
	/* {
		refetchQueries: [
		  {query: currentUser}, 
		],
	} */
	const [login, { data, loading, error }] = useMutation(loginUser, );
	let navigate = useNavigate();

	useEffect(() => {
		if (state.user){
			navigate("/account", { replace: true })
		}
  	},[state.user])

   const submitHandler = (event) => {
		console.log(state.email, state.password)
		event.preventDefault()
		
		login({ 
			variables: { 
				email: state.email, 
				password: state.password 
			} 
		}).then(user => 
			setState({ 
				...state, 
				user,
				email: '', 
				password: '' 
			})
		).catch(err => console.log(err));

   }

	const { email, password } = state
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
														<h4>Login</h4>
														<form action="" className="aa-login-form" onSubmit={event => submitHandler(event)}>
															<label htmlFor="">Username or Email address<span>*</span></label>
															<input type="text" placeholder="Username or email" value={email} onChange={(event) => setState({ ...state, email: event.target.value })} />
															<label htmlFor="">Password<span>*</span></label>
															<input type="password" placeholder="Password" value={password} onChange={(event) => setState({ ...state, password: event.target.value })} />
															<button type="submit" className="aa-browse-btn">Login</button>                    
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
export default Login; 