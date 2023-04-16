import { configureStore, combineReducers } from "@reduxjs/toolkit";
import albumReducer from "../reducers/albumReducer";
// import favouritesReducer from "../Reducers/favouritesReducer";

const bigReducer = combineReducers({
  album: albumReducer,
  //   favourites: favouritesReducer
});

const store = configureStore({
  reducer: bigReducer,
});
export default store;
