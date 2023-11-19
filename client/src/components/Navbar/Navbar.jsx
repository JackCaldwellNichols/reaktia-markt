import { useState } from "react";
import logo from "../../assets/logo.png";
import "./navbar.scss";
import {
  Person2Outlined,
  ShoppingCartOutlined,
  SearchOutlined,
  PersonPinOutlined,
  Logout,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../utils/firebaseConfig";
import { logoutUser } from "../../redux/features/userSlice";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const user = useSelector((state) => state.data.user.user);
  const cart = useSelector((state) => state.data.cart);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };

  const path = useLocation();
  const [show, setShow] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <Link to="/" className="link">
            <img src={logo} className="logo" />
          </Link>
        </div>
        {path.pathname === "/login" ||
          (path.pathname !== "/register" && (
            <>
              <div className="center">
                <input type="text" placeholder="Search" />
                <SearchOutlined className="icon" />
              </div>
              <div className="right">
                <span className="profile">
                  <Person2Outlined
                    className="icon"
                    onClick={() => setShow(true)}
                  />

                  <div className="menu">
                    {!user && (
                      <div className="menuBtnContainer">
                        <Link to="/login" className="link">
                          <button>Login</button>
                        </Link>
                        <Link to="/register" className="link">
                          <button>Register</button>
                        </Link>
                      </div>
                    )}
                    <hr />
                    {user ? (
                      <div className="menuItems">
                        <Link to={`/profile/${user.uid}`} className="link">
                          <span className="menuItem">My Account</span>
                        </Link>
                        <PersonPinOutlined className="itemIcon" />
                      </div>
                    ) : null}
                    {user ? (
                      <div className="menuItems" onClick={handleLogout}>
                        <span className="menuItem">Logout</span>
                        <Logout className="itemIcon" />
                      </div>
                    ) : null}
                  </div>
                </span>
                <Link to="/cart" className="link">
                  <span className="cart">
                    <Badge
                      badgeContent={cart.quantity}
                      color="primary"
                      className="badge"
                    />
                    <ShoppingCartOutlined className="icon" />
                  </span>
                </Link>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Navbar;
