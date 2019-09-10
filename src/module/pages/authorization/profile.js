import React ,{Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {bindActionCreators} from "redux";
import {setAuthorizationToFail} from '../../store/action'


class Profile extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		if (!this.props.Authorization.authorization) {
			return (
				<Redirect to='/dist/login'>
				</Redirect>
			)
		}

		return (
			<div>
				<h2>Профиль</h2>
				<img src={'../images/avatarProfile.svg'} style={{width:20+'%'}}/>
				<p>Здравствуйте, {this.props.Users.name}</p>
				<button onClick={this.output}>Выйти</button>
			</div>
		)
	};

	output = () => {
		this.props.setAuthorizationToFail();
	};

}

const mapStateToProps = (store) => {
	return store
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
	setAuthorizationToFail: setAuthorizationToFail
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps )  (Profile);
