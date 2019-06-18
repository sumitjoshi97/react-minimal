import React from 'react'
import './styles.scss'

const App = () => (
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

export default App
