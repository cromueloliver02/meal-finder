import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MealItem = ({ meal }) => {
	const {
		idMeal,
		strMeal,
		strMealThumb,
		strArea,
		strCategory
		// strTags
	} = meal;

	// const mealTags =
	// 	strTags === null ? [] : strTags.length > 0 ? strTags.split(',') : strTags;

	return (
		<div className='card'>
			<img className='card-img-top' src={strMealThumb} alt={strMealThumb} />
			<div className='card-body'>
				<p className='meal-name mb-1'>{strMeal}</p>
				<p className='meal-desc'>
					{strArea} {strCategory}
				</p>
				{/* {mealTags.length > 0 &&
					mealTags.map((mealTag, idx) => (
						<span
							key={mealTag[idx]}
							className='badge badge-pill badge-dark'
						>
							{mealTag}
						</span>
					))} */}
			</div>
			<div className='card-footer py-1'>
				<Link
					to={`/meal/${idMeal}`}
					className='btn btn-light btn-sm d-block m-auto'
				>
					View
				</Link>
			</div>
		</div>
	);
};

MealItem.propTypes = {
	meal: PropTypes.object.isRequired
};

export default MealItem;
