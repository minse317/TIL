function solution(p) {
	let answer = "";
	let left = 0 
    let right = 0; 
	let check = false;
    
	if (p.length == 0) {
        return ""
    }
    
	for (let i = 0; i < p.length; i++) {
        
		if (p[i] == '(') left++;
		if (p[i] == ')') right++;
        
		if (right > left) check = true;
        
		if (left == right) { 
          
			if (check == true) {
				answer += '(';
				answer += solution(p.slice(i + 1, p.length));
				answer += ')';
              
				for (let j = 1; j < i; j++) {
					if (p[j] == ')') answer += '(';
					if (p[j] == '(') answer += ')';
				}
				return answer;
			}
            
			else { 
				answer += p.slice(0, i + 1); 
				answer += solution(p.slice(i + 1, p.length));
				return answer;
			}
		}
    }
}
