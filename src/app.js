import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import reactDom from "react-dom";
import {Provider} from "react-redux";
import Index from './module/'
import store from "./module/store/store";



const appElement = document.getElementById('app');

reactDom.render(
	<Provider store={store}>
		<Index />
	</Provider>,
	appElement);

