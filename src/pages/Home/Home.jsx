/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useFetchData from "./../../hooks/useFetchData";
import Spinner from "./../../components/Spinner/Spinner";

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
        <div>{allNews.length}</div>
      )}
    </section>
  );
};

export default Home;
