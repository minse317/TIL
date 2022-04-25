function solution(A,B){
    var answer = 0;

    A.sort((a,b)=>a-b);
    B.sort((a,b)=>b-a);
    answer=A.reduce((acc,cur,idx)=>{
        return acc+A[idx]*B[idx];
    },0)

    return answer;
}
