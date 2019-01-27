import React from 'react'
import { hot } from 'react-hot-loader'
import './index.css'

class App extends React.Component {
  render() {
    return (
      <div>
        Hello from <code>App.js</code> 🌺 
      </div>
    )
  }
}

export default hot(module)(App)
