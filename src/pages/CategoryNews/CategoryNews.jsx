import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

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
			Total News for Selected Category {categoryNews.length}
		</div>
	);
};

export default CategoryNews;