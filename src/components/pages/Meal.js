import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMeal } from '../../_actions/meal';
import PropTypes from 'prop-types';

const Meal = ({ meal: { meal, loading }, match, getMeal }) => {
	useEffect(() => {
		getMeal(match.params.meal_id);
		// eslint-disable-next-line
	}, [match]);

	return (
		!loading &&
		meal !== null && (
			<div className='pt-4'>
				<div className='row'>
					<div className='col-md-4'>
						<p>
							<strong className='d-block'>Name: </strong> {meal.strMeal}
						</p>
						<p>
							<strong className='d-block'>Category: </strong>{' '}
							{meal.strCategory}
						</p>
						<p>
							<strong className='d-block'>Origin: </strong>{' '}
							{meal.strArea}
						</p>

						<a
							href={meal.strSource}
							target='_blank'
							rel='noopener noreferrer'
							className='btn btn-secondary btn-sm'
						>
							Read More
						</a>
						<a
							href={meal.strYoutube}
							target='_blank'
							rel='noopener noreferrer'
							className='btn btn-dark btn-sm ml-2'
						>
							Watch Video
						</a>

						{meal.strTags !== null && (
							<p className='text-muted mt-3'>
								<small>
									<strong>Tags: </strong>{' '}
									{meal.strTags.split(',').map((tag, idx) => (
										<small key={idx}>
											<span className='badge badge-dark badge-pill mr-1'>
												{tag}
											</span>
										</small>
									))}
								</small>
							</p>
						)}
					</div>
					<div className='col-md-4'>
						<img
							src={`${meal.strMealThumb}`}
							alt={`${meal.strMeal}`}
							className='img-fluid mb-4'
						/>
					</div>
				</div>
				<div className='card card-body'>
					<strong className='d-block mb-3'>How to prepare? </strong>
					<div className='row'>
						<div className='col-md-6'>
							<p className='mb-2'>
								<span>Ingredients:</span>
							</p>
							<ul className='list-group list-group-flush text-muted'>
								{meal.strIngredient1 !== '' ||
									(meal.strIngredient1 && (
										<li className='list-group-item'>
											{`${meal.strMeasure1} ${meal.strIngredient1}`}
										</li>
									))}
								{meal.strIngredient2 !== '' ||
									(meal.strIngredient2 && (
										<li className='list-group-item'>
											{`${meal.strMeasure2} ${meal.strIngredient2}`}
										</li>
									))}
								{meal.strIngredient3 !== '' ||
									(meal.strIngredient3 && (
										<li className='list-group-item'>
											{`${meal.strMeasure3} ${meal.strIngredient3}`}
										</li>
									))}
								{meal.strIngredient4 !== '' ||
									(meal.strIngredient4 && (
										<li className='list-group-item'>
											{`${meal.strMeasure4} ${meal.strIngredient4}`}
										</li>
									))}
								{meal.strIngredient5 !== '' ||
									(meal.strIngredient5 && (
										<li className='list-group-item'>
											{`${meal.strMeasure5} ${meal.strIngredient5}`}
										</li>
									))}
								{meal.strIngredient6 !== '' ||
									(meal.strIngredient6 && (
										<li className='list-group-item'>
											{`${meal.strMeasure6} ${meal.strIngredient6}`}
										</li>
									))}
								{meal.strIngredient7 !== '' ||
									(meal.strIngredient7 && (
										<li className='list-group-item'>
											{`${meal.strMeasure7} ${meal.strIngredient7}`}
										</li>
									))}
								{meal.strIngredient8 !== '' ||
									(meal.strIngredient8 && (
										<li className='list-group-item'>
											{`${meal.strMeasure8} ${meal.strIngredient8}`}
										</li>
									))}
								{meal.strIngredient9 !== '' ||
									(meal.strIngredient9 && (
										<li className='list-group-item'>
											{`${meal.strMeasure9} ${meal.strIngredient9}`}
										</li>
									))}
								{meal.strIngredient10 !== '' ||
									(meal.strIngredient10 && (
										<li className='list-group-item'>
											{`${meal.strMeasure10} ${meal.strIngredient10}`}
										</li>
									))}
								{meal.strIngredient11 !== '' ||
									(meal.strIngredient11 && (
										<li className='list-group-item'>
											{`${meal.strMeasure11} ${meal.strIngredient11}`}
										</li>
									))}
								{meal.strIngredient12 !== '' ||
									(meal.strIngredient12 && (
										<li className='list-group-item'>
											{`${meal.strMeasure12} ${meal.strIngredient12}`}
										</li>
									))}
								{meal.strIngredient13 !== '' ||
									(meal.strIngredient13 && (
										<li className='list-group-item'>
											{`${meal.strMeasure13} ${meal.strIngredient13}`}
										</li>
									))}
								{meal.strIngredient14 !== '' ||
									(meal.strIngredient14 && (
										<li className='list-group-item'>
											{`${meal.strMeasure14} ${meal.strIngredient14}`}
										</li>
									))}
								{meal.strIngredient15 !== '' ||
									(meal.strIngredient15 && (
										<li className='list-group-item'>
											{`${meal.strMeasure15} ${meal.strIngredient15}`}
										</li>
									))}
								{meal.strIngredient16 !== '' ||
									(meal.strIngredient16 && (
										<li className='list-group-item'>
											{`${meal.strMeasure16} ${meal.strIngredient16}`}
										</li>
									))}
								{meal.strIngredient17 !== '' ||
									(meal.strIngredient17 && (
										<li className='list-group-item'>
											{`${meal.strMeasure17} ${meal.strIngredient17}`}
										</li>
									))}
								{meal.strIngredient18 !== '' ||
									(meal.strIngredient18 && (
										<li className='list-group-item'>
											{`${meal.strMeasure18} ${meal.strIngredient18}`}
										</li>
									))}
								{meal.strIngredient19 !== '' ||
									(meal.strIngredient19 && (
										<li className='list-group-item'>
											{`${meal.strMeasure19} ${meal.strIngredient19}`}
										</li>
									))}
								{meal.strIngredient20 !== '' ||
									(meal.strIngredient20 && (
										<li className='list-group-item'>
											{`${meal.strMeasure20} ${meal.strIngredient20}`}
										</li>
									))}
							</ul>
						</div>
						<div className='col-md-6'>
							<p>
								<span className='d-block'>Instructions:</span>
								<span className='text-muted'>
									{meal.strInstructions}
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	);
};

Meal.propTypes = {
	meal: PropTypes.object,
	getMeal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	meal: state.meal
});

export default connect(mapStateToProps, { getMeal })(Meal);
