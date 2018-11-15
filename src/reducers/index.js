import {REMOVE_STATE} from '../actions/actions';
import {combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reducerApi from './reducerApi';
const initialState = {};

const appReducer = combineReducers({
	routing: routerReducer,
	reducerApi
});

const rootReducer = (state, action) => {
	if(action.type === REMOVE_STATE){
		state = action.state
	}

	return appReducer(state, action);
};



export default rootReducer;
