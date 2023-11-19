import React from "react";
import { useSelector } from "react-redux";
import "./profile.scss";
import CatPageCard from "../../components/CatPageCard/CatPageCard";

const Profile = () => {
  const { user } = useSelector((state) => state.data.user);

  const { favourites } = useSelector((state) => state.data.favourites);

  return (
    <div className="profilePage">
      <div className="wrapper">
        <h1 className="title">Signed in as {user.username}</h1>
        <h1 className="title">{user.email}</h1>
        <div className="wishlistWrapper">
          <h1 className="title">Your wishlist:</h1>
          <div className="wishlist">
            {favourites.map((fav) => (
              <CatPageCard item={fav} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
