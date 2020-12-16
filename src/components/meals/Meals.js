import React from 'react';
import MealItem from './MealItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Meals = ({ meals, loading }) => {
	if (meals === null) {
		return (
			<p className='text-center text-muted'>
				You wanna learn a new recipe? Hit the random button or enter a text
				then hit the find button.
			</p>
		);
	}

	return (
		<div className='card-deck' style={mealsGrid}>
			{!loading &&
				meals.length > 0 &&
				meals.map(meal => <MealItem key={meal.idMeal} meal={meal} />)}
		</div>
	);
};

const mealsGrid = {
	display: 'grid',
	gridTemplateColumns: 'repeat(4, 1fr)',
	gridRowGap: '1rem'
};

Meals.propTypes = {
	meals: PropTypes.array,
	loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
	loading: state.meal.loading
});

export default connect(mapStateToProps)(Meals);
