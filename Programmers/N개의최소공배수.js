function solution(arr) {
    return arr.reduce((a, b) =>{
        return a * b / getGCD(a, b);
    })
}

function getGCD(a, b){
    if(a % b == 0) return b;
    return getGCD(b, a % b);
}
