/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import useFetchData from "./../../hooks/useFetchData";
import { useState } from "react";
import Spinner from './../Spinner/Spinner';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const { getCategories } = useFetchData();

  useEffect(() => {
    setLoading(true);
    const loadCategories = async () => {
      const data = await getCategories();
      setCategories(data);
      setLoading(false);
    };
    loadCategories();
  }, []);

  return (
    <div>
      <div>
        <h3 className="text-secondary font-semibold text-lg">
          All Caterogy
        </h3>
      </div>
      <div className="mt-5">
        {loading ? (
          <Spinner className="text-center text-primary" />
        ) : (
          categories?.map((category) => (
            <CategoryItem
              key={category.id}
              category={category}
              setSelectedCategory={setSelectedCategory}
              selected={category.id === selectedCategory}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryList;
