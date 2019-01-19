import {messageTypes} from '../constants/websocket';
import {CONN_CLOSE, CONN_CONNECTING, CONN_OPEN} from '../actions/websocket';
import throttle from 'lodash.throttle';

let websocket;

class WebSocketClient extends WebSocket {

  sendStack = [];
  eventListeners = [];

  constructor(address, protocols, options) {
    super(address, protocols, options);
    this.addEventListener('open', () => this.processStack());
  }

  processStack() {
    this.sendStack.forEach(args => this.send.apply(this, args));
    this.sendStack = [];
  }

  addEventListener(type, listener, options) {
    this.eventListeners.push({type, listener, options});
    return super.addEventListener(type, listener, options);
  }

  removeEventListeners() {
    this.eventListeners.forEach(({type, listener, options}) => this.removeEventListener(type, listener, options));
    this.eventListeners = [];
  }

  send(data, options, cb) {
    if (this.readyState === WebSocket.OPEN) {
      return super.send.apply(this, arguments);
    }

    this.sendStack.push(arguments);
  }
}

function storeDispatchClientEvents(client, store) {
  messageTypes.forEach(type => client.addEventListener(type, (event) => {
    store.dispatch({type, payload: event.data});
  }));
}

export const bindSocketToStore = (store) => {
  function connect() {
    const client = new WebSocketClient('ws://localhost:8080', 'echo-protocol', null);

    client.onopen = () => client.dispatchEvent(new MessageEvent(CONN_OPEN));

    client.onmessage = ({ data }) => {
      const event = JSON.parse(data);
      client.dispatchEvent(new MessageEvent(event.type, { data: event.payload }));
    };

    client.onclose = () => {
      client.dispatchEvent(new Event(CONN_CLOSE));

      setTimeout(() => {
        client.dispatchEvent(new Event(CONN_CONNECTING));
        client.removeEventListeners();
        websocket = connect();
      }, 5000);
    };

    storeDispatchClientEvents(client, store);
    return client;
  }

  return () => websocket = connect();
};

export const emit = (type, payload) => websocket.send(JSON.stringify({type: type.toString(), payload}));
