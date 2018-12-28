const client = new WebSocket('ws://localhost:8080', 'echo-protocol');

console.log(client);

client.onopen = function() {
  // Web Socket is connected, send data using send()
  var blob = new Blob([JSON.stringify("dlkj", null, 2)], {type : 'application/json'});

  client.send(blob);
  console.log('Message is sent...');
};

client.onmessage = function(evt) {
  const received_msg = evt.data;
  console.log('Message is received: ' + received_msg);
};

client.onclose = function() {
  console.log('Connection closed...');
};

export const init = (store) => {
  // Object.keys( messageTypes )
  //       .forEach( type => socket.on( type, ( payload ) =>
  //           store.dispatch({ type, payload })
  //         )
  //       );
};

export const emit = (type, payload) => client.send(JSON.stringify({type, payload}));
