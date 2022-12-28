const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var num = [];
rl.on("line", function (x) {
  num.push(x);
  rl.close();
}).on("close", function () {

  var arr = []
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        arr.push(i)
    }
  }
  console.log(arr.length)
  arr.forEach(v => console.log(v))
  process.exit();
});
