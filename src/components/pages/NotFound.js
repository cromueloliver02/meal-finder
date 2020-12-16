import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='py-5 row'>
			<div className='col-md-4 offset-md-4'>
				<h3 className='text-center text-muted mb-5'>
					<strong>404</strong>: Page Not Found
				</h3>
				<Link
					to='/'
					className='btn btn-secondary text-center btn-sm btn-block'
				>
					Go Home
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
