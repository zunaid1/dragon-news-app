import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';



const Register = () => {

	const { createUser, setUser, updateUser } = use(AuthContext);
	const [nameErr, setNameErr] = useState("");

	const navigate = useNavigate();
	const handleRegister = (e) => {

		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const photo = form.photo.value;
		const email = form.email.value;
		const password = form.password.value;
		console.log({ name, photo, email, password });

		//Validations START 
		if (name.length < 5) {
			setNameErr("Name should be more then 5 char.");
			return;
		}
		else {
			setNameErr("");

		}
		//Validations END
		createUser(email, password)
			.then(result => {
				const user = result.user;
				console.log(user);

				updateUser({ displayName: name, photoURL: photo }).then(() => {
					setUser({ ...user, displayName: name, photoURL: photo });
					navigate("/")
				})
					.catch((error) => {
						const errCode = error.errorCode;
						const errMsg = error.errorMessage;
						console.log(errCode, errMsg);
						setUser(user);
					});

			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert(errorCode, errorMessage);
				//console.log("ErrorCode: ",errorCode, "ErrorMsg: ", errorMessage)
				// ..
			});
	}



	return (
		<div className="flex justify-center min-h-screen items-center">

			<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
				<h2 className='text-center font-bold text-3xl py-5'>Register Your Account</h2>
				<form onSubmit={handleRegister} className="card-body">
					<fieldset className="fieldset">
						{/* Name  */}
						<label className="label">Name</label>
						<input type="text"
							name='name'
							className="input"
							placeholder="Name"
							required />

						{nameErr && <p className='text-red-400 text-sm'>{nameErr}</p>}


						{/* Photo URL  */}
						<label className="label">Photo Url</label>
						<input type="text"
							name='photo'
							className="input"
							placeholder="Photo Url"
							required />


						{/* Email  */}
						<label className="label">Email</label>
						<input type="email"
							name='email'
							className="input"
							placeholder="Email"
							required />


						{/* Password  */}
						<label className="label">Password</label>
						<input type="text"
							name='password'
							className="input"
							placeholder="Password"
							required />



						<button type="submit" className="btn btn-neutral mt-4">Submit</button>
						<p className='text-center font-semibold pt-5'>Already Have An Account?
							<Link className='text-secondary' to="/auth/login" >  Login</Link>
						</p>
					</fieldset>
				</form>
			</div>

		</div>
	);
};

export default Register;