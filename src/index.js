import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import blogReducer from './reducer/Blog';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Blog from './components/Blog'
import BlogInput from './containers/BlogInput'


const store = createStore(blogReducer)
ReactDOM.render(
 <Provider store = {store} >
     <ConnectedRouter>
     <div>
        <App />

        </div>
    </ConnectedRouter>
 </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
