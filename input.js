// Stores the active TCP connection object.
let connection;

// Setup User Interface 
// Specifically, so that we can handle user input via stdin

const handleUserInput = function(key) {
  if (key === '\u0003') {
    //console.log('text')
    process.exit();
  }
   //console.log(key)
  if (key === 'w') {
    connection.write('Move: up');
 }
  if (key === 's') {
    connection.write('Move: down');
 }
  if (key === 'a') {
    connection.write('Move: left');
 }
  if (key === 'd') {
    connection.write('Move: right');
}
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // handleUserInput is the data callback as we want to exit the game using
  // CTRL+C. And moves
  stdin.on('data', key => handleUserInput(key));
  return stdin;

};

module.exports = {  setupInput

};