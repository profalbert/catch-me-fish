import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import store from './store/redux-store'

// todo: сделать BrowserRouter, а не HashRouter (лучше будет работать, так более правильно, не будет # в URL, ведь она портит внешний вид URL запроса :) )
// это настраивается на хостинге (правильные пути)
ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,

  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

// basename="catchmefish"
// "homepage": "http://albert-hosting.ru/catchmefish"
// ИЛИ
// "homepage": "http://profalbert.github.io/catchmefish"
