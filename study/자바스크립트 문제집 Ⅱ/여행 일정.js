const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var input = '';
rl.on("line", function (x) {
  input = x;
  rl.close();
}).on('close', function () {
  const [y, m, d] = input.split('-').map(v => Number(v));
  const table31 = [1, 3, 5, 7, 8, 10, 12].indexOf(m) !== -1;
  const table30 = [4, 6, 9, 11].indexOf(m) !== -1;
  const table29 = (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
  const checkDay = (() => {
    if (table29) return 29;
    if (table30) return 30;
    if (table31) return 31;
    return 28;
  })();

  const year = y >= 2000 && y <= 2099;
  const month = m >= 1 && m <= 12;
  const day = d >= 1 && d <= checkDay;

  if (year && month && day) {
    console.log(1);
  } else {
    console.log(0);
  }

  process.exit();
});
