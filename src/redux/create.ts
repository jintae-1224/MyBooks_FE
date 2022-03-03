import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const create = () => {
  const store = createStore(reducer, composeWithDevTools(applyMiddleware()));

  return store;
};

export default create;
