import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import courseReducer from "./reducers/courseReducer";

const store = createStore(courseReducer, applyMiddleware(thunk));

export default store;
