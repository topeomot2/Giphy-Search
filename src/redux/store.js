import {applyMiddleware, createStore, compose} from "redux";
import searchReducer from './reducer';
import { middleware } from './middleware';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}) : compose;

export const store = createStore(
    searchReducer,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);