import "./catCard.scss";
import { Link } from "react-router-dom";

const CategoryCard = ({ category, img }) => {
  return (
    <div className="catCard">
      <Link to={`/category/${category}`} className="link">
        <img src={img} className="catCardImg" />
        <span className="title">{category}</span>
      </Link>
    </div>
  );
};

export default CategoryCard;
