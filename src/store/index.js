import { createStore, applyMiddleware, compose } from "redux";
/*
 * Local import
 */
// Reducer
import reducer from "./reducer";
import middleware from "./middleware";

const appliedMiddlewares = applyMiddleware(middleware);

/*
 * Code
 */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(appliedMiddlewares);

// createStore
const store = createStore(reducer, enhancers);
/*
 * Export
 */
export default store;
