import React from 'react';
import logo from './logo.svg';
import ComponenteControlado from './fundamentals/ComponenteControlado'
import './App.css';

import ComponenteComHooks from './fundamentals/ComponenteComHooks';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <ComponenteComHooks />
      </header>
    </div>
  );
}

export default App;


// mounting, updating e umounting

// mounting - construtor, 
            // getDerivedStateFromProps, 
            // render, 
            // componentDidMount
// updating - getDerivedStateFromProps
//            shouldComponentUpdate
//            render,
//            getSnapshotBeforeUpdate
//            compomenDidUpdate
// umounting - componentWillUnmount