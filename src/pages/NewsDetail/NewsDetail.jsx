/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router";
import useFetchData from "./../../hooks/useFetchData";
import Spinner from "./../../components/Spinner/Spinner";

const NewsDetail = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { getNews } = useFetchData();

  useEffect(() => {
    setLoading(true);
    const loadNews = async () => {
      const newsList = await getNews();

      const targetedNews = newsList.find((news) => news.id === id);

      setNews(targetedNews);
      setLoading(false);
    };

    loadNews();
  }, [id]);

  return (
    <div>
      {loading ? (
        <Spinner className="text-primary mx-auto text-center" />
      ) : (
        <div className="border border-accent rounded-box p-5">
          <div>
            <img
              className="w-full rounded-lg"
              src={news.image_url}
              alt="News Image"
            />
          </div>
          <div className="my-5">
            <h3 className="text-xl font-semibold ">{news.title}</h3>
            <p className="mt-3 text-secondary">{news.details}</p>
          </div>
          <div>
            <Link to={`/category-news/${news.category_id}`}>
              {" "}
              <button className="btn btn-primary text-white">
                Back to category
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsDetail;
