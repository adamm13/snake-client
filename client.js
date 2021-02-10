const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Connection has been Established with the Game Server');
    conn.write('Name: AJM')
  });
  
   conn.on('data', (serverMessage) => {
    console.log(serverMessage);
  });


  return conn;


}
//es6 object shorthand
module.exports = {  connect

}