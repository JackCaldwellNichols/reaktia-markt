import { useEffect, useState } from "react";
import SunGlassesCard from "../sunglassesCard/SunglassesCard";
import axios from "axios";
import "./sunglasses.scss";
import { Link } from "react-router-dom";

const SunGlasses = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const getTopRated = async () => {
      const res = await axios.get(
        "https://dummyjson.com/products/category/sunglasses"
      );
      setPhones(res.data.products);
    };
    getTopRated();
  }, []);

  return (
    <div className="sunglasses">
      <div className="title">
        <h1>Sunglasses</h1>
      </div>
      <div className="wrapper">
        {phones.map((item) => (
          <div key={item.id}>
            <Link className="link" to={`/product/${item.id}`} key={item.id}>
              <SunGlassesCard item={item} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SunGlasses;
