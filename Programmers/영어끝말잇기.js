function solution(n, words) {
    let idx;
    for (let i = 0; i < words.length; i++) {
        if (i !== 0 && words[i][0] !== words[i - 1][words[i - 1].length - 1]) {
            idx = i + 1;
            return [idx % n === 0 ? n : idx % n, Math.ceil(idx / n)];
        }
 
    for (let j = i - 1; j >= 0; j--) {
      if (words[i] === words[j]) {
        idx = i + 1;
        return [idx % n === 0 ? n : idx % n, Math.ceil(idx / n)];
      }
    }
  }
  return [0, 0];
}
