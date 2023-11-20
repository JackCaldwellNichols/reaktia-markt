import "./home.scss";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/category/categories/Categories";
import Toprated from "../../components/topRated/toprated/Toprated";
import Banner from "../../components/OfferBanner/Banner";
import Phones from "../../components/phones/phones/Phones";
import HealthAndBeauty from "../../components/health&beauty/health/HealthAndBeauty";
import SunGlasses from "../../components/sunglasses/sunglasses/Sunglasses";
import bg from "../../assets/bg.png";

const Home = ({ open, setOpen }) => {
  return (
    <div className="home">
      <div className="homeContainer">
        <Hero />
        <Categories open={open} setOpen={setOpen} />
        <Toprated />
        <Banner />
        <Phones />
        <HealthAndBeauty />
        <SunGlasses />
      </div>
    </div>
  );
};

export default Home;
