import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "./middleware/logger";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from "./reducers";

const initialState = {};

if (localStorage.getItem("cartItems")) {
  initialState.cart = { items: JSON.parse(localStorage.getItem("cartItems")) };
}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

export default store;
