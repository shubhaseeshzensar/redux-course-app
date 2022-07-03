import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { loggerMiddleWare } from "./middleware/logger";
import logger from "redux-logger";
import thunk from "redux-thunk";

// function currying

// const currying = (a) =>
//     (b,c)=>{
//         a+b-c
// }

// const with10 = currying(10)

// with10(2,4)

// The middlewares work with the concept of currying

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["userReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [
  process.env.NODE_ENV === "development" && logger,
  thunk,
].filter(Boolean);
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
