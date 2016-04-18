import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore.js';
import { syncHistoryWithStore } from 'react-router-redux';

// store
const store = configureStore();

// react-router-redux
const history = syncHistoryWithStore(browserHistory, store);

// lazy load component
const loadConmponentAsync = bundle => (location, callback) =>
{
	bundle(component => {
		callback(null, component.default);
	});
};

const routes = (
	<Router history={history}>
		<Route getComponent={loadConmponentAsync(require('bundle?lazy&name=layout!../components/layout/layout'))}>
			<Route  path= "/sortable" getComponent={loadConmponentAsync(require('bundle?lazy&name=sortable!../components/sortable/sortable'))} />
			<Route  path= "/todoList" getComponent={loadConmponentAsync(require('bundle?lazy&name=sortable!../components/todoList/todoList'))} />
			<Route  path= "/commentBox" getComponent={loadConmponentAsync(require('bundle?lazy&name=commentBox!../components/commentBox/commentBox'))} />
			<Route  path= "/carousel" getComponent={loadConmponentAsync(require('bundle?lazy&name=carousel!../components/carousel/carousel'))} />
			<Route  path= "/draggableBalls" getComponent={loadConmponentAsync(require('bundle?lazy&name=draggableBalls!../components/draggableBalls/draggableBalls'))} />
			<Route  path= "/posts" getComponent={loadConmponentAsync(require('bundle?lazy&name=posts!../components/posts/posts'))} />
			<Route  path= "/counter" getComponent={loadConmponentAsync(require('bundle?lazy&name=counter!../components/counter/counter'))} />
		</Route>
    </Router>
);

render(
	<Provider store={store}>
		{routes}
	</Provider>,
	document.getElementById('root')
);
