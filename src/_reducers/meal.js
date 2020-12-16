import { SEARCH_MEALS, GET_MEAL, SET_LOADING } from '../_actions/types';

const initialState = {
	meals: [],
	meal: null,
	loading: false
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case SEARCH_MEALS:
			return {
				...state,
				meals: payload,
				loading: false
			};
		case GET_MEAL:
			return {
				...state,
				meal: payload,
				loading: false
			};
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
};
