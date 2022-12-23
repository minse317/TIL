const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var input = [];
rl.on("line", function (x) {
  input.push(x);
  if (input.length === 2) {
    rl.close();
  }
}).on("close", function () {
  var str = input[1]

  var upper = str.match(/[A-Z]/g) ? str.match(/[A-Z]/g).length : 0 
  var lower = str.match(/[a-z]/g) ? str.match(/[a-z]/g).length : 0
  var number = str.match(/[0-9]/g) ? str.match(/[0-9]/g).length : 0

  console.log( upper, lower, number )
  process.exit();
});
