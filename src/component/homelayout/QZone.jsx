import React from 'react';
import swimmingImg from "../../assets/swimming.png"
import classImg from "../../assets/class.png"
import playground from "../../assets/playground.png"

const QZone = () => {
	return (
		<div className='bg-base-200 p-3'>
			<h1 className=' font-bold mb-5'>QZone</h1>
			<div className='space-y-5'>
				<img src={swimmingImg}></img>
				<img src={classImg}></img>
				<img src={playground}></img>
			</div>
		</div>
	);
};

export default QZone;