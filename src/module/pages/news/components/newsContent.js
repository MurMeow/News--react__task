import React, {Component } from "react";
import { Redirect } from "react-router-dom";
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {Container, Row, Col } from 'reactstrap';
import {setAuthorizationToSuccess} from '../../reducers/action'
import CarouselComponent from './components/carousel'
import Tabs from './components/tabs'


class Content extends Component {

	constructor(props) {
		super(props);
		this.state = {};

	}

	render() {
		return (


		)
	}
}

const mapStateToProps = (store) => {
	return store
};

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps ) (Content);
