import React, {Component} from 'react';
import './App.module.scss';
import Chart from './components/CandlestickChart';

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
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
                <Chart />
            </div>
        );
    }
}

export default App;
