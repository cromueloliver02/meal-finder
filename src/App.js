import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/layout/Header';
import Alert from './components/layout/Alert';
import Spinner from './components/layout/Spinner';
import Home from './components/pages/Home';
import Meal from './components/pages/Meal';
import NotFound from './components/pages/NotFound';
// redux
import store from './store';
import { Provider } from 'react-redux';

const App = props => {
	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Alert />
					<Header />
					<Spinner />
					<div className='container'>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route
								exact
								path='/meal/:meal_id'
								{...props}
								component={Meal}
							/>
							<Route component={NotFound} />
						</Switch>
					</div>
				</Fragment>
			</Router>
		</Provider>
	);
};

export default App;
