import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga'
import createHistory from 'history/createBrowserHistory'

ReactGA.initialize('UA-130206187-1');

const history = createHistory()

var getpath = function(location){
	if (!location || !location.pathname){
		return null;
	}

	if (location.hash){
		return location.pathname + location.hash;
	}

	return location.pathname;
}

var trackPageView = function (location){
	var path = getpath(location);
	if (!path){
		return;
	}
	console.log(path);
	ReactGA.set({ page: path});
	ReactGA.pageview(path);
}

trackPageView(history.location);
history.listen((location, action) => {
	trackPageView(location);
});

ReactDOM.render(<App history={history}/>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
