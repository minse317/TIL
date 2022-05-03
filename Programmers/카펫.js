function solution(brown, red) {
    const num = brown + red;
    
    for(let i = Math.floor(num / 2); i > 0; i--){
        if(num % i !== 0) continue;
        
        const width = i;
        const height = num / i;
        
        if((width - 2) * (height - 2) === red){
            return [width, height];
        }
    }
}
