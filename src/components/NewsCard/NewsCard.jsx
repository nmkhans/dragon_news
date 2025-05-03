import React from "react";
import { Bookmark } from "lucide-react";
import { Share2 } from "lucide-react";
import { Star } from "lucide-react";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router";

const NewsCard = ({ news }) => {
  const navigate = useNavigate();

  return (
    <div className="mb-5">
      <div className="flex bg-[#F3F3F3] border border-[#F3F3F3] w-full p-3 rounded-t-box justify-between items-center">
        <div className="flex gap-x-3">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={news.author.img} alt="Author image" />
            </div>
          </div>
          <div>
            <h3 className="text-secondary font-medium">
              {news.author.name}
            </h3>
            <p className="text-[#706F6F]">
              {news.author.published_date.split("T")[0]}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-2 text-[#706F6F]">
          <button className="cursor-pointer">
            <Bookmark strokeWidth={1.5} />
          </button>
          <button className="cursor-pointer">
            <Share2 strokeWidth={1.5} />
          </button>
        </div>
      </div>
      <div className="border border-[#E7E7E7] p-5">
        <div>
          <h3 className="font-semibold text-xl text-secondary w-[80%] leading-[35px]">
            {news.title}
          </h3>
        </div>
        <div className="mt-5">
          <img
            className="rounded-box w-full"
            src={news.thumbnail_url}
            alt="News thumbnail"
          />
        </div>
        <div className="mt-5">
          <p className="text-[#706F6F]">
            {news.details.slice(0, 300)}...
          </p>
          <button
            onClick={() => navigate(`/news-detail/${news.id}`)}
            className="text-primary font-semibold mt-2 cursor-pointer"
          >
            Read More
          </button>
        </div>
        <div className="divider"></div>
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-x-3 text-[#706F6F]">
            <div className="flex items-center gap-1">
              {[...Array(news.rating.number)].map((_, i) => (
                <Star key={i} size={18} color="#FF8C47" />
              ))}
            </div>
            <span>{news.rating.number}</span>
          </div>
          <div className="flex gap-x-1 text-secondary">
            <Eye />
            <span>{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
