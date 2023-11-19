import { createSlice } from "@reduxjs/toolkit";

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    favourites: [],
  },

  reducers: {
    addFavourite: (state, action) => {
      state.favourites.push(action.payload);
    },
    removeFavourite: (state, action) => {
      const newFavouriteList = state.favourites.filter(
        (product) => product.id !== action.payload.id
      );
      state.favourites = newFavouriteList;
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;
