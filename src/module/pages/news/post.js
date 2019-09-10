import React, {Component } from "react";
import { Redirect } from "react-router-dom";
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {Container, Row, Col } from 'reactstrap';
import CarouselComponent from './components/carousel'
import Tabs from './components/tabs'
import './post.css';

const styleContainer = {
	width: 95+'%',
	margin: 'auto'
};

const styleCarousel = {
	width: 60+'%',
	margin: 'auto'
};

const styleH1 = {
	textAlign: 'center',
	margin: 20 + 'px'
};


class Post extends Component {

	constructor(props) {
		super(props);
		this.state = {};

	}

	render() {
		return (
			<Container style={styleContainer}>
				<Row style={styleH1}>
					<Col>
						<h1>MURurmur</h1>
					</Col>
				</Row>
				<Row style={styleCarousel}>
					<Col>
						<CarouselComponent/>
					</Col>
				</Row>
				<Row>
					<Col >
						<Tabs/>
					</Col>
				</Row>
			</Container>

		)
	}
}

const mapStateToProps = (store) => {
	return store
};

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps ) (Post);
