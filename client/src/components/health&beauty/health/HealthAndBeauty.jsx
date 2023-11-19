import { useEffect, useState } from "react";
import HealthCard from "../healthCard/HealthCard";
import axios from "axios";
import "./healthandbeauty.scss";
import { Link } from "react-router-dom";

const HealthAndBeauty = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const getTopRated = async () => {
      const res = await axios.get(
        "https://dummyjson.com/products/category/lighting"
      );
      setPhones(res.data.products);
    };
    getTopRated();
  }, []);

  return (
    <div className="phones">
      <div className="title">
        <h1>Lighting</h1>
      </div>
      <div className="wrapper">
        {phones.map((item) => (
          <div key={item.id}>
            <Link className="link" to={`/product/${item.id}`}>
              <HealthCard item={item} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthAndBeauty;
