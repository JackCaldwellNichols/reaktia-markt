import React, { useEffect, useState } from "react";
import "./single.scss";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Swiper, SwiperSlide } from "swiper/react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { ShoppingCartCheckout } from "@mui/icons-material";
import { addProduct } from "../../redux/features/cartSlice";
import { addFavourite } from "../../redux/features/favouritesSlice";
import { useDispatch } from "react-redux";

const Single = () => {
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const path = useLocation();
  const id = path.pathname.split("/")[2];
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity: quantity }));
  };

  const handleFavourite = () => {
    dispatch(addFavourite({ ...product, quantity: quantity }));
  };

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="single">
      <div className="wrapper">
        <div className="info">
          <div className="breadCrumb">
            <Link to="/" className="link">
              <OtherHousesOutlinedIcon />
            </Link>
            <KeyboardArrowRightIcon />
            <p className="category">
              Category
              <KeyboardArrowRightIcon />
              <Link to={`/category/${product?.category}`} className="link">
                {product?.category}
              </Link>
            </p>
          </div>
          <div className="ratingContainer">
            <Rating
              name="half-rating"
              defaultValue={product?.rating}
              precision={0.5}
              className="star"
            >
              <StarIcon />
            </Rating>
            <span className="ratingNumber">
              {Math.round(product?.rating * 100) / 100} / 5
            </span>
          </div>

          <h1 className="brand">{product?.brand}</h1>
          <h2 className="desc">{product?.description}</h2>
        </div>
        <div className="body">
          <div className="left">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 50,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {product?.images.map((image, index) => (
                <SwiperSlide className="slide" key={index}>
                  <img src={image} className="image" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="right">
            <div className="discountContainer">
              <span className="discount">
                -{Math.floor(product?.discountPercentage)}%
              </span>
              <span
                style={{ textDecoration: "line-through" }}
                className="prevPrice"
              >
                $
                {Math.round(
                  (product?.price / 100) * product?.discountPercentage +
                    product?.price
                )}
              </span>
            </div>
            <h1 className="price">${product?.price}</h1>
            <div className="finance">
              <span>Pay in 12 installments:</span>
              <span>${Math.round(product?.price / 12)} per month</span>
            </div>
            <div className="available">
              {product?.stock > 0 ? (
                <div className="inStock">
                  <FiberManualRecordIcon
                    style={{ color: "rgb(29, 159, 29)", fontSize: "14px" }}
                  />
                  <span className="yes">In stock</span>
                </div>
              ) : (
                <div>
                  <span className="no">Not Available</span>
                </div>
              )}
              <div className="amountContainer">
                <RemoveIcon
                  className="amountIcon"
                  onClick={() => handleQuantity("dec")}
                />
                <span className="amount">{quantity}</span>
                <AddIcon
                  className="amountIcon"
                  onClick={() => handleQuantity("inc")}
                />
              </div>
            </div>
            <div className="btnContainer">
              <button className="addToCartBtn" onClick={handleClick}>
                <ShoppingCartCheckout className="cartIcon" />
                Add to cart
              </button>
              <button className="addToFav" onClick={handleFavourite}>
                <FavoriteBorderIcon className="cartIcon" />
              </button>
            </div>
            <div className="accordian">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Shipping</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Returns Policy</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography>FAQs</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
