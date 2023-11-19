import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";
import "./sunglassescard.scss";

const SunGlassesCard = ({ item }) => {
  return (
    <div className="sunglassesCard">
      <img src={item.thumbnail} className="cardImg" />
      <div className="cardBody">
        <div className="cardBodyTop">
          <span className="cardRating">
            <Rating
              name="half-rating"
              defaultValue={item.rating}
              precision={0.5}
              className="star"
            >
              <StarIcon />
            </Rating>
          </span>
          <p className="cardTitle">{item.title}</p>
        </div>
        <p className="cardDesc">{item.description.slice(0, 50)}...</p>
        <h1 className="cardPrice">${item.price}</h1>
      </div>
    </div>
  );
};

export default SunGlassesCard;
