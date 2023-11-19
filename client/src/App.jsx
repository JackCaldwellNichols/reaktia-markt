import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar/Navbar";
import Topbar from "./components/topbar/Topbar";
import Category from "./pages/category/Category";
import DrawerMenu from "./components/drawer/Drawer";
import { useEffect } from "react";
import Single from "./pages/Single/Single";
import Login from "./pages/login/Login";
import Footer from "./components/footer/Footer";
import Register from "./pages/register/Register";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./utils/firebaseConfig";

import { setLoading, loginUser } from "./redux/features/userSlice";
import Cart from "./pages/cart/Cart";
import Profile from "./pages/profile/Profile";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
      }
    });
  }, []);

  const user = useSelector((state) => state.data.user.user);
  const cart = useSelector((state) => state.data.cart);

  return (
    <div className="app">
      <BrowserRouter>
        <DrawerMenu />
        <Topbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/product/:productId" element={<Single />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile/:uid" element={user ? <Profile /> : <Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
