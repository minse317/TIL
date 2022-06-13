function solution(s) {
    let answer = 0;
    
    const dict = {
        '[': ']',
        '{': '}',
        '(': ')',
    };
    
    const checkStr = (str) => {
        let flag = true;
        
        let stack = [str[0]];
        for (let k = 1; k < str.length; k++) {
            if (Object.keys(dict).includes(str[k])) stack.push(str[k]);
            else {
                const tmp = stack.pop();
                if (dict[tmp] !== str[k]) {
                    flag = false;
                    break;
                }
            }
        }
        
        if (stack.length > 0) return false;        
        return flag;
    };
    
    if (checkStr(s)) answer += 1;
    for (let i = 1; i < s.length; i++) {
        s = s.slice(1, s.length) + s[0];
      
        if (checkStr(s)) answer += 1;
    }
    
    return answer;
}
