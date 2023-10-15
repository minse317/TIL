function solution(start, end_num) {
    const answer = []
    while(start >= end_num){
        answer.push(start)
        start--
    }
    return answer
}
