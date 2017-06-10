import React from 'react';
import { render } from 'react-dom';
import Photogrid from './components/Photogrid';
import Single from './components/Single';
import App from './components/App';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//grab the css
import css from './styles/style.styl'


import { Provider } from 'react-redux';
import store, { history } from './store'

const router = (

	<Provider store={store}>
		<Router history={history}>
			<Route path ="/" component={App}>
				<IndexRoute component={Photogrid}> </IndexRoute>
				<Route path ="/view/:postId" component={Single}></Route>
			</Route>
		</Router>
	</Provider>
	
)


render(router, document.getElementById('root'));
