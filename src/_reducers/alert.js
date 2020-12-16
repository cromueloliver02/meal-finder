import { SET_ALERT, REMOVE_ALERT } from '../_actions/types';

const initialState = {
	alerts: []
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_ALERT:
			return {
				...state,
				alerts: [...state.alerts, payload]
			};
		case REMOVE_ALERT:
			return {
				...state,
				alerts: state.alerts.filter(alert => alert.id !== payload)
			};
		default:
			return state;
	}
};
