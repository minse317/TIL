function solution(relation) {
    let answer = 0;
    
    let col = relation[0].length;
    let row = relation.length;
    
    let bitmask = [];
    for (let i = 1; i < (1 << col); i++) {
        let bit = '';
        for (let j = 0; j < col; j++) {
            if ((i & (1 << j)) !== 0) bit += j;
        }
        bitmask.push(bit);
        bit = '';
    }
    
    bitmask.sort((a, b) => a.length - b.length);
    
    while (bitmask.length > 0) {
        let col = bitmask.shift().split('').map(Number);
        let set = new Set();
        
        relation.map(tuple => {
            let tmp = '';
            
            for (let i = 0; i < col.length; i++) {
                tmp += tuple[col[i]];
            }
            set.add(tmp);
        });
        
        if (set.size === row) {
            answer += 1;
            bitmask = bitmask.filter(item => !col.every(v => item.includes(v)));
        }
    }
    
    return answer;
}
