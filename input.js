const handleUserInput = function(key) {
  if (key === "\u0003") {
    //console.log("text")
    process.exit();
  }
   //console.log(key)
}

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // handleUserInput is the data callback as we want to exit the game using
  // CTRL+C. And moves
  stdin.on('data', key => handleUserInput(key));
  return stdin;

}

module.exports = {  setupInput

}