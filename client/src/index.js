import React from "react";
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import reducers from './reducers'

import App from './App'
import './index.css'

// Creates a Redux store that holds the complete state tree of your app.
const store = createStore(reducers, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App/>
    </Provider>,
)

// ReactDOM.render(
//
//     document.getElementById('root'))