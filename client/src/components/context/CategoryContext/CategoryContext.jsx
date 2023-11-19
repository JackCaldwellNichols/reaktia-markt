import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const CategoryContext = createContext();

export const CategoryContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(
          "https://dummyjson.com/products/categories"
        );
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};
