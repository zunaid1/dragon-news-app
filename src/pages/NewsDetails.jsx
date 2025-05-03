import React, { useEffect, useState } from 'react';
import Header from '../component/Header/Header';
import { Outlet, useLoaderData, useParams } from 'react-router';
import RightAside from '../component/homelayout/RightAside';
import NewsDetailsCard from '../component/NewsDetailsCard';

const NewsDetails = () => {
	const data = useLoaderData();
	const { id } = useParams();
	const [news, setNews] = useState({});

	//==============================



	console.log(data, id);

	useEffect(() => {
		const newsDetails = data.find(singleNews => singleNews.id == id);
		setNews(newsDetails);

	}, [data, id])


	return (
		<div>
			<header className='py-3'>
				<Header></Header>
			</header>
			<main className='w-11/12 mx-auto grid grid-cols-12 gap-5 my-10'>
				<section className='col-span-9'>
					<h2 className='font-bold mb-5'>News Details</h2>
					<NewsDetailsCard news={news}></NewsDetailsCard>
				</section>
				<section className='col-span-3'>
					<RightAside></RightAside>
				</section>

			</main>
		</div>
	);
};

export default NewsDetails;