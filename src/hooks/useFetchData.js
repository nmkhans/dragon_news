import React from "react";

const useFetchData = () => {
  const getCategories = async () => {
    const res = await fetch("/categories.json");
    const data = await res.json();
    return data;
  };

  return {
    getCategories,
  };
};

export default useFetchData;
