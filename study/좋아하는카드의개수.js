const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var input = []
rl.on("line", function (x) {
  input.push(x)
  if ( input.length == 3) {
    rl.close();
  }  
}).on("close", function () {
  var cards = input[1].split(' ')
  var favorite = input[2]
  var count = 0

  for (var i = 0; i < cards.length; i++) {
    if (favorite == cards[i]) {
      count++
    }
  }
  console.log(count)
  process.exit();
});
