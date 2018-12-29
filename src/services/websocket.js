import {messageTypes} from '../constants/websocket';

let client;

class WebSocketClient extends WebSocket {

  sendStack = [];
  
  constructor(address, protocols, options) {
    super(address, protocols, options);
    this.addEventListener('open', () => this.processStack());
  }

  processStack() {
    this.sendStack.forEach(args => this.send.apply(this, args));
    this.sendStack = [];
  }

  send(data, options, cb) {
    if (this.readyState === WebSocket.OPEN) {
      return super.send.apply(this, arguments);
    }

    this.sendStack.push(arguments);
  }
}

function connect() {
  client = new WebSocketClient('ws://localhost:8080', 'echo-protocol', null);

  client.onopen = () => {
    console.log('Connected with server!');

    // Web Socket is connected, send data using send()
    // var blob = new Blob([JSON.stringify("dlkj", null, 2)], {type : 'application/json'});
    //
    // client.send(blob);
    // console.log('Message is sent...');
  };

  client.onmessage = evt => {
    const received_msg = evt.data;
    console.log('Message is received: ' + received_msg);
  };

  client.onclose = () => {
    console.log('Connection closed. Retrying to connect in 3 seconds.');
    setTimeout(() => {
      console.log('Connecting..');
      connect();
    }, 3000);
  };

  return client;
}

client = connect();

export const bindSocketToStore = (store) => {
  Object.keys(messageTypes).forEach(type => client.addEventListener(type, (payload) => store.dispatch({type, payload})));
};

export const emit = (type, payload) => client.send(JSON.stringify({type, payload}));
export default client;
