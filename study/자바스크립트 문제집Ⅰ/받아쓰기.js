const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var input = []
rl.on("line", function (x) {
  input.push(x)
  if (input.length === 3) {
    rl.close();
  }  
}).on("close", function () {
  var [_, A, B] = input
  console.log(B.includes(A) ? 1 : 0)
  process.exit();
});
