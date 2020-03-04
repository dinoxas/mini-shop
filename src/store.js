import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "./reducers";

const initialState = {};

console.log("store LS: ", localStorage.getItem("cartItems"));

if (localStorage.getItem("cartItems")) {
  initialState.cart = { items: JSON.parse(localStorage.getItem("cartItems")) };

  console.log("initialStateCart: ", initialState.cart);
}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
