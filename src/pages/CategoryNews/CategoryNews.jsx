import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../../component/NewsCard';

const CategoryNews = () => {
	const { id } = useParams();
	const data = useLoaderData();
	const [categoryNews, setCategoryNews] = useState([]);

	//console.log(id, data);
	useEffect(() => {
		//let filteredNews=[]

		if (id == "0") {
			setCategoryNews(data);
			//console.log(filteredNews);
			return;
		}
		else if(id == "1"){
			 const filteredNews = data.filter((news) => news.others.is_today_pick == true);
			 setCategoryNews(filteredNews);
			 console.log(filteredNews);
			 return;
		}
		else{
			const filteredNews = data.filter((news) => news.category_id == id)
			setCategoryNews(filteredNews);
			console.log(filteredNews);
		}
		
	

	}, [data, id])


	return (
		<div>
			<h2 className='font-bold mb-5'>Total <span className='text-secondary'>{categoryNews.length}</span> News Found</h2>

			<dvi className="grid grid-cols-1 gap-5">
				{
					categoryNews.map((news) => <NewsCard 
					key={news.id} 
					news={news}
					>

					</NewsCard>)
				}

			</dvi>
		</div>
	);
};

export default CategoryNews;