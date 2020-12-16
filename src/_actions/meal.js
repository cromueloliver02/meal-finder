import axios from 'axios';
import { SEARCH_MEALS, GET_MEAL, SET_LOADING } from './types';

export const searchMeals = (text, history) => async dispatch => {
	dispatch(setLoading());

	try {
		const res = await axios.get(
			`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`
		);

		dispatch({
			type: SEARCH_MEALS,
			payload: res.data.meals
		});
	} catch (err) {
		console.error(err.message);
	}

	history.push('/');
};

export const getMeal = id => async dispatch => {
	dispatch(setLoading());

	try {
		const res = await axios.get(
			`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
		);

		dispatch({
			type: GET_MEAL,
			payload: res.data.meals[0]
		});
	} catch (err) {
		console.error(err.message);
	}
};

export const randomMeal = history => async dispatch => {
	dispatch(setLoading());

	try {
		const res = await axios.get(
			'https://www.themealdb.com/api/json/v1/1/random.php'
		);

		history.push(`/meal/${res.data.meals[0].idMeal}`);
	} catch (err) {
		console.error(err.message);
	}
};

const setLoading = () => dispatch => {
	dispatch({
		type: SET_LOADING
	});
};
