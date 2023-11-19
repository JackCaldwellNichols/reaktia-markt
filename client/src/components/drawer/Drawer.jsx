import { Drawer } from "@mui/material";
import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext/CategoryContext";
import Divider from "@mui/material/Divider";
import "./drawer.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const DrawerMenu = ({ open, setOpen }) => {
  const { categories } = useContext(CategoryContext);

  return (
    <div className="drawer">
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiPaper-root": {
            width: 300,
            backgroundColor: "black",
            borderRadius: "0px 10px",
            color: "white",
            display: "flex",
            alignItems: "center",
            textAlign: "left",
            justifyContent: "start",
            padding: "20px",
          },
        }}
      >
        <>
          <img src={logo} alt="" className="logo" />
          {categories.map((category, index) => (
            <div key={index} className="menuContainer">
              <Link className="link" to={`/category/${category}`}>
                <p className="catTitle">{category}</p>
              </Link>
              <KeyboardArrowRightIcon className="icon" />
            </div>
          ))}
          <Divider />
          <h3>My Account</h3>
        </>
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
