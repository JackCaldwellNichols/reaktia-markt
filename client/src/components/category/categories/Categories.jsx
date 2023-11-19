import { useContext, useState } from "react";
import "./cat.scss";
import CategoryCard from "../category-card/CategoryCard";
import { catImages } from "../../../catImages";
import DrawerMenu from "../../drawer/Drawer";
import { CategoryContext } from "../../context/CategoryContext/CategoryContext";

const Categories = () => {
  const { categories } = useContext(CategoryContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="categories">
      <div className="title">
        <h1>Categories</h1>
        <span onClick={() => setOpen(true)}>See all categories</span>
      </div>
      <div className="wrapper">
        {categories.slice(0, 10).map((category, index) => (
          <CategoryCard
            key={category}
            category={category}
            img={catImages[index]}
          />
        ))}
      </div>
      <DrawerMenu {...{ open, setOpen }} />
    </div>
  );
};

export default Categories;
