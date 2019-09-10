import {combineReducers, createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import {Authorization} from "../reducers/auth";
import {Users} from "../reducers/users";
import {News} from "../reducers/news";



const reducers = combineReducers({
	Authorization,
	Users,
	News
});

// const composeEnhancers = composeWithDevTools ({
//
// });

const store = createStore(
	reducers,
	composeWithDevTools ()
	// composeEnhancers (
	// applyMiddleware (... middleware), )
);
console.log(store);
export default store;
