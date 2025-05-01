import { FaBookBookmark } from "react-icons/fa6";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";

import { FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
	const {
		title,
		image_url,
		details,
		total_view,
		rating: { number },
		author: { name, published_date, img },
	} = news;

	return (
		<div className="card bg-base-100 shadow-md">
			<div className="flex items-center gap-4 p-4 border-b bg-base-200">
				<img src={img} alt={name} className="w-10 h-10 rounded-full" />
				<div>
					<h2 className="font-semibold">{name}</h2>
					<p className="text-sm text-gray-500">
						{new Date(published_date).toISOString().split("T")[0]}
					</p>
				</div>


				<div className="ml-auto flex gap-2 text-gray-500 cursor-pointer">
					<button className="btn btn-ghost btn-sm">

						<MdOutlineBookmarkAdd size={25} />

					</button>
					<button className="btn btn-ghost btn-sm">
						<IoShareSocialOutline size={25} />
					</button>
				</div>
			</div>

			<div className="px-4 pt-4">
				<h2 className="text-xl font-bold">{title}</h2>
				<img src={image_url} alt="News" className="my-4 rounded-md w-full" />
				<p className="text-gray-700">
					{details.length > 250 ? `${details.slice(0, 250)}...` : details}
					<span className="text-orange-600 font-semibold ml-1 cursor-pointer">Read More</span>
				</p>
			</div>

			<div className="flex items-center justify-between px-4 py-3 border-t">
				<div className="flex items-center text-orange-500 gap-1">
					<FaStar />
					<span className="text-black font-semibold">{number}</span>
				</div>
				<div className="flex items-center gap-1 text-gray-600">
					<FaEye />
					<span>{total_view}</span>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
