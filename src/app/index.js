import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
/*
 * The Provider component provides
 * the React store to all its child
 * components so we don't need to pass
 * it explicitly to all the components.
 */
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger';

import reducers from "./reducer/index.js"
import LikesContainer from './component/LikesContainer.js';
/**
 * Create a logger.
 */
const logger = createLogger();
const initialState = {};
/*
 * This creates the store so we
 * can listen to changes and
 * dispatch actions.
 */
const store = createStore(reducers, initialState, applyMiddleware(logger));

class App extends React.Component {
    
    constructor(props) {
    	super(props);
    }

    render () {
	    return (
	    	<Provider store={store}>
				<div>
		            <p>Hello React!</p>
					<LikesContainer />
		        </div>
			</Provider>
	    );
    }
}

render(<App/>, document.getElementById('app'));