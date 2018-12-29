import React, {Component} from 'react';
import './App.module.scss';
import Chart from './containers/chart';
import client from './services/websocket';
import Header from './components/Header';

class App extends Component {
  render() {
    client.addEventListener('open', event => {
      client.send('Frontend application loaded!');
    });

    client.addEventListener('message', event => {
      console.log('Message from server ', event.data);
    });
    
    
    return <div className="App">
      <Header/>
      <Chart/>
    </div>;
  }
}

export default App;
