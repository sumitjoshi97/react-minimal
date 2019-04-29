import React, { Component } from 'react'
import './styles.scss'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h2>minimal react boiler</h2>
        <img src={require('../assets/logo.png')} alt="react boiler" />
        <a
          href="https://github.com/sumitjoshi97/react-boiler"
          rel="noreferrer noopener"
          target="_blank"
        >
          know more
        </a>
        <footer>developed and maintained by @Sj</footer>
      </div>
    )
  }
}
