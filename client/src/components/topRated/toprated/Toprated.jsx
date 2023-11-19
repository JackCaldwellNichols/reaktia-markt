import React, { useEffect, useState } from "react";
import TopRatedCard from "../topRatedCard/TopRatedCard";
import axios from "axios";
import "./toprated.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Toprated = () => {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const getTopRated = async () => {
      const res = await axios.get("https://dummyjson.com/products?limit=100");
      setTopRated(res.data.products);
    };
    getTopRated();
  }, []);

  return (
    <div className="toprated">
      <div className="title">
        <h1>Top Rated</h1>
      </div>
      <div className="wrapper">
        <Swiper slidesPerView={5} spaceBetween={60}>
          {topRated
            .filter(
              (ele) =>
                ele.category === "smartphones" || ele.category === "laptops"
            )
            .slice(0, 20)

            .map((item, index) => (
              <SwiperSlide>
                <Link className="link" to={`/product/${item.id}`}>
                  <TopRatedCard item={item} />
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Toprated;
