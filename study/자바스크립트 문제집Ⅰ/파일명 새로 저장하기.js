const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var input = []
rl.on("line", function (x) {
  input.push(x);
  if ( input[0] == input.length - 1 ) {
    rl.close();
  }
}).on("close", function () {
  for (var i = 1; i < input.length; i++) {
    var str = input[i].toLowerCase()
    console.log(str.charAt(0).toUpperCase() + str.slice(1))
  }  
  process.exit();
});
