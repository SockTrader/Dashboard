import React, {Component} from 'react';
import './App.module.scss';
import Header from './components/Header';
import DataList from './components/DataList';
import Chart from './containers/chart';

class App extends Component {
  render() {
    return <div className="App">
      <Header/>
      {/*<DataList/>*/}
      <Chart/>
    </div>;
  }
}

export default App;
