import { combineReducers } from "redux";
import { userSlice } from "../features/userSlice";
import { cartSlice } from "../features/cartSlice";
import { favouritesSlice } from "../features/favouritesSlice";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  cart: cartSlice.reducer,
  favourites: favouritesSlice.reducer,
});
