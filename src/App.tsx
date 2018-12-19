// import * as test from "websocket/lib/websocket";
import websocket from 'websocket/lib/WebSocketClient';
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// debugger;
console.log(websocket);
// return;
// const client = new WebSocketClient();
//
// client.on('connectFailed', (error: any) => {
//     console.log('Connect Error: ' + error.toString());
// });
//
// client.on('connect', (connection: any) => {
//     console.log('WebSocket Client Connected');
//     connection.on('error', (error: any) => {
//         console.log("Connection Error: " + error.toString());
//     });
//     connection.on('close', () => {
//         console.log('echo-protocol Connection Closed');
//     });
//     connection.on('message', (message: any) => {
//         if (message.type === 'utf8') {
//             console.log("Received: '" + message.utf8Data + "'");
//         }
//     });
//
//     function sendNumber() {
//         if (connection.connected) {
//             var number = Math.round(Math.random() * 0xFFFFFF);
//             connection.sendUTF(number.toString());
//             setTimeout(sendNumber, 1000);
//         }
//     }
//
//     sendNumber();
// });
//
// client.connect('ws://localhost:8080/', 'echo-protocol');

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
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
            </div>
        );
    }
}

export default App;
