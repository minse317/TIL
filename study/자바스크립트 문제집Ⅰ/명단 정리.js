const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var input = []
rl.on("line", function (x) {
  input.push(x)
  if (input.length - 1 == input[0]){
    rl.close();
  }  
}).on("close", function () {
  for (var i = 1; i < input.length; i++) {
    var newStr = input[i].substr(1);
    var location =  newStr.search(/[A-Z]/g);
    console.log(newStr.slice(location))
  }
  process.exit();
});
