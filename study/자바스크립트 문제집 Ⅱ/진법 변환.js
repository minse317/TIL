const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var num = '';
rl.on("line", function (x) {
  num = x;
  rl.close();
}).on("close", function () {
  const [a, b] = num.split(' ').map(k => Number(k));
  
  console.log(a.toString(b))
  process.exit();
});
