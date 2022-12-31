const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var input = [];
rl.on("line", function (x) {
  input.push(x);
  if (Number(input[0]) === input.length - 1) {
    rl.close();
  }
}).on("close", function () {
  for (var i = 1; i < input.length; i++) {
    const [a, b] = input[i]
        .split(' ')
        .map(s => s.toString().split('').reverse().join(''));
    const answer = (Number(a) + Number(b))
        .toString()
        .split('')
        .reverse()
        .join('')
    console.log(answer)
  }
  process.exit();
});
