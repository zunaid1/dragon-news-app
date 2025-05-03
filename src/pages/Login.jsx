import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
	const [error, setError] = useState("");
	const { logIn, setUser } = use(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;

		const email = form.email.value;
		const password = form.password.value;
		console.log({ email, password });

		logIn(email, password)
			.then(result => {
				const user = result.user;
				console.log(user);
				navigate(`${location.state ? location.state : "/"}`);

			})
			.catch((error) => {
				const errorCode = error.code;
				//const errorMsg = error.message;
				//alert(errorCode, errorMsg);
				setError(errorCode);
			})


	}





	return (
		<div className="flex justify-center min-h-screen items-center">

			<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
				<h2 className='text-center font-bold text-3xl py-5'>Login Your Account</h2>
				<form onSubmit={handleLogin} className="card-body">
					<fieldset className="fieldset">

						{/* Email  */}
						<label className="label">Email</label>
						<input type="email" name='email' className="input" placeholder="Email" required />


						{/* Password */}
						<label className="label">Password</label>
						<input type="password" name='password' className="input" placeholder="Password" required />
						<div><a className="link link-hover">Forgot password?</a></div>

						{error && <p className='text-red-400 text-sm'>{error}</p>}
						<button type="submit" className="btn btn-neutral mt-4">Login</button>
						<p className='text-center font-semibold pt-5'>Don't Have An Account?
							<Link className='text-secondary'
								to="/auth/register"

							>  Register</Link>
						</p>
					</fieldset>
				</form>
			</div>

		</div>
	);
};

export default Login;