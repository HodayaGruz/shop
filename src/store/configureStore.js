import { createStore, combineReducers, compose } from 'redux'
import * as reducers from './reducers'

const rootReducer = combineReducers({...reducers});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = createStore(
        rootReducer,
        composeEnhancers(
            // applyMiddleware(epicMiddleware)
        )
    );

    // epicMiddleware.run(rootEpic);

    return store;
}
export default configureStore;
