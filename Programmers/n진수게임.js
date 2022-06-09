function solution(n, t, m, p) {
    var answer = '';
    var numSet = [];
    
    for(var i =0; i<t*m; i++){
        numSet.push(i.toString(n))

    }
    
    var numStr = numSet.join("");
    
    for(var j=0; j<t*m; j++){
        if(j%m===p-1){ 
            answer = answer + numStr[j].toUpperCase();
        }
    }
    return answer;
}
