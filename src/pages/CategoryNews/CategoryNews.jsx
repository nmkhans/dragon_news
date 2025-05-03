/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import useFetchData from "./../../hooks/useFetchData";
import { useParams } from "react-router";
import Spinner from "../../components/Spinner/Spinner";
import NewsCard from "../../components/NewsCard/NewsCard";

const CategoryNews = () => {
  const [allNews, setAllNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getNews } = useFetchData();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const loadAllNews = async () => {
      const data = await getNews();

      if (+id === 1) {
        const filteredData = data.filter(
          (news) => news.others.is_today_pick === true
        );

        setAllNews(filteredData);
      } else {
        const filteredData = data.filter(
          (news) => news.category_id === parseInt(id)
        );

        setAllNews(filteredData);
      }

      setLoading(false);
    };
    loadAllNews();
  }, [id]);

  return (
    <section>
      {loading ? (
        <Spinner className="text-center text-primary mt-10" />
      ) : (
        <div>
          {allNews.length > 0 ? (
            allNews?.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))
          ) : (
            <div className="text-center mt-10 font-semibold text-secondary text-2xl">
              No News Available!
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default CategoryNews;
