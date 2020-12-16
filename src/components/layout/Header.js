import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../_actions/alert';
import { searchMeals, randomMeal } from '../../_actions/meal';
import PropTypes from 'prop-types';

const Header = ({ setAlert, searchMeals, randomMeal, history }) => {
	const [text, setText] = useState('');

	const onSubmit = e => {
		if (text === '') {
			setAlert('Please enter a valid text to find a meal', 'danger');
		} else {
			searchMeals(text, history);
		}

		e.preventDefault();
	};

	return (
		<div className='py-4' style={{ background: '#e9e9e9' }}>
			<div className='container'>
				<Link to='/' className='text-decoration-none text-dark'>
					<h3 className='text-center mb-3' style={{ fontWeight: '600' }}>
						<i className='fas fa-utensils'></i> Meal Finder
					</h3>
				</Link>
				<div className='row'>
					<div className='col-md-5 d-block m-auto'>
						<form onSubmit={onSubmit}>
							<div className='form-group'>
								<div className='input-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Find meal...'
										name='text'
										value={text}
										onChange={e => setText(e.target.value)}
									/>
									<div className='input-group-append'>
										<button
											type='submit'
											className='btn btn-outline-secondary'
										>
											<i className='fas fa-search'></i> Find
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className='row'>
					<div className='col'>
						<button
							className='btn btn-dark btn-sm m-auto d-block'
							onClick={() => randomMeal(history)}
						>
							<i className='fas fa-random'></i> Random Meal
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Header.propTypes = {
	setAlert: PropTypes.func.isRequired,
	searchMeals: PropTypes.func.isRequired,
	randomMeal: PropTypes.func.isRequired
};

export default connect(null, { setAlert, searchMeals, randomMeal })(
	withRouter(Header)
);
