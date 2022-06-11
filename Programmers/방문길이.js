function solution(dirs) {
    let count = 0;

    const moveObj = {
        "U": [0, 1],
        "D": [0, -1],
        "R": [1, 0],
        "L": [-1, 0]
    }

    let pos = [0,0];    
    const visited = [];   

    for(let i = 0, len = dirs.length; i < len; i++) {
        const moveValue = moveObj[dirs[i]];
        const move = [pos[0] + moveValue[0], pos[1] + moveValue[1]];    
        
        if(move[0] > 5 || move[0] < -5 || move[1] > 5 || move[1] < -5) {
            continue;
        }

        const startIndex = (5+pos[0]) + (5-pos[1]) * 11;   
        const endIndex = (5+move[0]) + (5-move[1]) * 11;   

        pos = move;

        const isVisited = visited.find((item) => {
            if( (item[0] === startIndex && item[1] === endIndex)
               || (item[0] === endIndex && item[1] === startIndex) ) {
                return true;
            }
        })

        if( !isVisited ) {
            ++count;
            visited.push([startIndex, endIndex]);
        }
    }

    return count;
}

