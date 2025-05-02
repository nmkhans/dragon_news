/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useFetchData from "./../../hooks/useFetchData";
import Spinner from "./../../components/Spinner/Spinner";
import NewsCard from "../../components/NewsCard/NewsCard";

const Home = () => {
  const [allNews, setAllNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getNews } = useFetchData();

  useEffect(() => {
    setLoading(true);
    const loadAllNews = async () => {
      const data = await getNews();
      setAllNews(data);
      setLoading(false);
    };
    loadAllNews();
  }, []);
  return (
    <section>
      {loading ? (
        <Spinner className="text-center text-primary mt-10" />
      ) : (
        <div>
          {allNews?.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Home;
