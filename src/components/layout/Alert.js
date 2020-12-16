import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Alert = ({ alerts }) =>
	alerts.length > 0 &&
	alerts.map(alert => (
		<div key={alert.id} className={`notif show alert-${alert.type}`}>
			<p className='m-0'>
				<i className='fas fa-info-circle'></i> {alert.msg}
			</p>
		</div>
	));

Alert.propTypes = {
	alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	alerts: state.alert.alerts
});

export default connect(mapStateToProps)(Alert);
