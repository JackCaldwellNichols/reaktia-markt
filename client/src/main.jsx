import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CategoryContextProvider } from "./components/context/CategoryContext/CategoryContext.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CategoryContextProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CategoryContextProvider>
);
