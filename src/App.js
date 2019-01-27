import React from 'react'
import { hot } from 'react-hot-loader'
import './index.css'
import imgGhAvatar from './images/gh-avatar.png'

class App extends React.Component {
  render() {
    return (
      <div>
        Hello from <code>App.js</code> 🌺 
        <img src={imgGhAvatar}/>
      </div>
    )
  }
}

export default hot(module)(App)
