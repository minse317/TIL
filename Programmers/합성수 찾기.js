function solution(n) {
    var answer = new Set();
    for(var i = 1; i <= n; i++){
        for(var j = 2; j < i; j++){
            if(i % j === 0)
                answer.add(i);
        }
    }
    return answer.size;
}
