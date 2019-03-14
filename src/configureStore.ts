import { createStore, combineReducers, compose } from "redux";
import newsReducer from "./reducers/news";

export default () => {
  const store = createStore(
    combineReducers({
      news: newsReducer
    })
  );
  return store;
};
