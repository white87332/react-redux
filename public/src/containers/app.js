import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore.js';
import Immutable from 'immutable';
const store = configureStore(Immutable.Map());

//lazy load component
const loadContainerAsync = bundle => (location, callback) =>
{
	bundle(component => {
		callback(null, component.default);
	});
};

const routes = (
	<Router history={hashHistory}>
		<Route getComponent={loadContainerAsync(require('bundle?lazy!../components/layout/layout'))}>
			<Route path="posts" getComponent={loadContainerAsync(require('bundle?lazy!../components/posts/posts'))} />
			<Route path="counter" getComponent={loadContainerAsync(require('bundle?lazy!../components/counter/counter'))} />
		</Route>
    </Router>
);

render(
	<Provider store={store}>
		{routes}
	</Provider>,
	document.getElementById('root')
);
