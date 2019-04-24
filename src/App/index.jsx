import React, { Component } from 'react'
import './styles.scss'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h2>Minimal React Boiler</h2>
        <img src={require('../assets/logo.png')} alt='react boiler' />
      </div>
    )
  }
}
