const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = null;
rl.on('line', function (x) {
  const X = Number(x);
  n = X + (X - 2);
  rl.close();
}).on('close', function () {
  for (let i = n; i >= -n; i--) {
    let arr = [];
    for (let j = -n; j <= n; j++) {
      const max = Math.max(Math.abs(i), Math.abs(j));
      if (max % 2 === 0) {
        arr.push('*');
      } else {
        arr.push(' ');
      }
    }

    console.log(arr.join(""));
  }
  process.exit();
});
