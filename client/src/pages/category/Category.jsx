import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./category.scss";
import axios from "axios";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import CatPageCard from "../../components/CatPageCard/CatPageCard";

const Category = () => {
  const [category, setCategory] = useState([]);
  const path = useLocation();

  const cat = path.pathname.split("/")[2];

  useEffect(() => {
    const getCategory = async () => {
      try {
        const res = await axios.get(
          `https://dummyjson.com/products/category/${cat}`
        );
        setCategory(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, [cat]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cat]);

  return (
    <div className="cat">
      <div className="wrapper">
        <div className="info">
          <div className="breadCrumb">
            <Link to="/" className="link">
              <OtherHousesOutlinedIcon />
            </Link>
            ><p className="category">Category > {cat}</p>
          </div>
          <h1 className="categoryTitle">{cat}</h1>
        </div>
        <div className="body">
          <div className="left">
            <h2 className="brands">Brands</h2>
            <ul className="brandList">
              {category.map((cat) => (
                <li className="brandName">{cat.brand}</li>
              ))}
            </ul>
          </div>
          <div className="right">
            {category.map((cat) => (
              <>
                <Link className="link" to={`/product/${cat.id}`}>
                  <CatPageCard item={cat} key={cat.id} />
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
