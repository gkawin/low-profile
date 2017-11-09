import React from 'react'
import ReactDOMServer from 'react-dom/server'
import LoadingScreen from './pre-render/LoadingScreen.jsx'

exports.prerender = function () {
  return ReactDOMServer.renderToString(<LoadingScreen />)
}
