function solution(n) {
    let result = 0;
    let first = 1;
    let second = 2;
    
    if (n == 1){
        result = first;
    } else if (n == 2) {
        result = second;
    } else {
        for (var i = 3; i <= n; i++) {
            result = (first + second) % 1234567;
            first = second;
            second = result;
        }
    }
    return result;
}
