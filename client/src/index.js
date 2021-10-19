import React from 'react'
import  ReactDOM from 'react-dom'
// *provider is going to keep track of the store which is the global state and allows to acces that store from anywhere inside of the app
import { Provider } from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import {reducers} from './reducers'

import App from './App'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store ={store}>
    <App/>,

    </Provider>,
    document.getElementById('root')
)