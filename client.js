const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

   conn.on('data', (serverMessage) => {
    console.log(serverMessage);
  });
  
   conn.on('connect', () => {
    console.log('Connection has been Established with the Game Server');
    conn.write('Name: AJM')
    //setInterval(() => {
      //conn.write('Move: up');
      //}, 1000
  });


  return conn;


}
//es6 object shorthand
module.exports = {  connect

}