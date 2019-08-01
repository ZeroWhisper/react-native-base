import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reactotron from "~/config/reactotron";

import reducers from "./ducks";
import sagas from "./sagas";

let enhancer = null;
let sagaMonitor = null;

if (reactotron) {
  enhancer = reactotron.createEnhancer();
  sagaMonitor = reactotron.createSagaMonitor();
}

const sagaMiddleware = createSagaMiddleware(reactotron ? { sagaMonitor } : {});
// const sagaMiddleware = createSagaMiddleware({});

const middlewares = [];
middlewares.push(sagaMiddleware);

const propsComposer = [];
propsComposer.push(applyMiddleware(...middlewares));
propsComposer.push(enhancer);

const composer = compose(...propsComposer);

const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;
