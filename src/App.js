import React, {Component} from 'react';
import './App.module.scss';
import Chart from './containers/chart';

// const client = new WebSocket('ws://localhost:8080');
//
// console.log(client);
//
// client.onopen = function() {
//   // Web Socket is connected, send data using send()
//   client.send("Message to send");
//   console.log("Message is sent...");
// };
//
// client.onmessage = function (evt) {
//   const received_msg = evt.data;
//   console.log("Message is received: " + received_msg);
// };
//
// client.onclose = function() {
//
//   // websocket is closed.
//   console.log("Connection is closed...");
// };

class App extends Component {
  render() {
    return <div className="App">
      <Chart/>
    </div>;
  }
}

export default App;
