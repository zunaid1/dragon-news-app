import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
	return (
		<div>
			<h1 className='font-bold text-2xl mb-5'>Find Us</h1>
			<div>
				<div className="join join-vertical w-full">
					<button className="btn bg-base-100 justify-start join-item "> <FaFacebook size={20} color='blue'> </FaFacebook> Facebook</button>
					<button className="btn bg-base-100 justify-start join-item"><FaTwitter size={20} color='#1DA1F2'></FaTwitter> Twiter</button>
					<button className="btn bg-base-100 justify-start join-item"> <FaInstagram size={20} color='#DD2A7B'></FaInstagram> Instagram</button>
				</div>
			</div>
		</div>
	);
};

export default FindUs;