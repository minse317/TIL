'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function miniMaxSum(arr) {
    // Write your code here
    let mini = 0; 
    let max = 0;
    
    for(let i = 0; i < arr.length - 1; i++){
        mini += arr.sort()[i];
    }
    
    for(let j = 1; j <arr.length; j++) {
        max += arr.sort()[j];
    }
    
    console.log(mini, max);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
