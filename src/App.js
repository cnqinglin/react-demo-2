import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            请欣赏我的React项目
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            点击预览
          </a>
        </header>
      </div>
    );
  }
}

export default App;
