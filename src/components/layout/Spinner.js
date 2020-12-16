import React from 'react';
import spinner from './spinner.gif';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Spinner = ({ loading }) =>
	loading && (
		<img
			src={spinner}
			alt='Loading...'
			className='img-fluid d-block m-auto'
			style={{ width: '250px' }}
		/>
	);

Spinner.propTypes = {
	loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
	loading: state.meal.loading
});

export default connect(mapStateToProps)(Spinner);
