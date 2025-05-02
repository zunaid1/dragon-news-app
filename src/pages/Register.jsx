import React from 'react';
import { Link } from 'react-router';



const Register = () => {
	return (
		<div className="flex justify-center min-h-screen items-center">

			<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
				<h2 className='text-center font-bold text-3xl py-5'>Register Your Account</h2>
				<div className="card-body">
					<form className="fieldset">
						{/* Name  */}
						<label className="label">Name</label>
						<input type="text" name='name' className="input" placeholder="Name" />

						{/* Photo URL  */}
						<label className="label">Photo Url</label>
						<input type="text" name='photo' className="input" placeholder="Photo Url" />


						{/* Email  */}
						<label className="label">Email</label>
						<input type="email" className="input" placeholder="Email" />


						{/* Password  */}
						<label className="label">Password</label>
						<input type="password" className="input" placeholder="Password" />



						<button className="btn btn-neutral mt-4">Submit</button>
						<p className='text-center font-semibold pt-5'>Already Have An Account?
							<Link className='text-secondary' to="/auth/login" >  Login</Link>
						</p>
					</form>
				</div>
			</div>

		</div>
	);
};

export default Register;