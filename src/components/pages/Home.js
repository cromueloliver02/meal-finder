import React from 'react';
import Meals from '../meals/Meals';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Home = ({ meal: { meals, loading } }) => (
	<div className='pt-4'>
		{meals === null && !loading ? (
			<p className='text-center d-block text-muted'>No meal found...</p>
		) : meals.length === 0 && !loading ? (
			<p className='text-center text-muted'>
				You wanna learn a new recipe? Hit the random button or enter a text
				then hit the find button.
			</p>
		) : (
			<Meals meals={meals} />
		)}
	</div>
);

Home.propTypes = {
	meal: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	meal: state.meal
});

export default connect(mapStateToProps)(Home);
