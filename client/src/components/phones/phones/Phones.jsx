import { useEffect, useState } from "react";
import PhondCard from "../phoneCard/PhoneCard";
import axios from "axios";
import "./phones.scss";
import { Link } from "react-router-dom";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const getTopRated = async () => {
      const res = await axios.get(
        "https://dummyjson.com/products/category/smartphones"
      );
      setPhones(res.data.products);
    };
    getTopRated();
  }, []);

  return (
    <div className="phones">
      <div className="title">
        <h1>Smartphones</h1>
      </div>
      <div className="wrapper">
        {phones.map((item) => (
          <div key={item.id}>
            <Link className="link" to={`/product/${item.id}`}>
              <PhondCard item={item} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Phones;
