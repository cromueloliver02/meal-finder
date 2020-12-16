import { combineReducers } from 'redux';
import alert from '../_reducers/alert';
import meal from '../_reducers/meal';

export default combineReducers({
	alert,
	meal
});
