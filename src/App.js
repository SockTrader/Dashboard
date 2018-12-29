import React, {Component} from 'react';
import './App.module.scss';
import Chart from './containers/chart';
import Header from './components/Header';

class App extends Component {
  render() {
    return <div className="App">
      <Header/>
      <Chart/>
    </div>;
  }
}

export default App;
