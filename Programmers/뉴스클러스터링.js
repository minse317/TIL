function solution(str1, str2) {
  let answer = 0;

  let lowerStr1 = str1.toLocaleLowerCase();
  let lowerStr2 = str2.toLocaleLowerCase();

  let str1List = [];
  let str2List = [];
  let interSectionList = [];

  let alphaRex = /^[a-zA-Z]*$/;
  for (let i = 0; i < lowerStr1.length - 1; i++) {
    let testStr = lowerStr1.slice(i, i + 2);
    if (alphaRex.test(testStr)) {
      str1List.push(lowerStr1.slice(i, i + 2));
    }
  }
  for (let j = 0; j < lowerStr2.length - 1; j++) {
    let testStr = lowerStr2.slice(j, j + 2);
    if (alphaRex.test(testStr)) {
      str2List.push(lowerStr2.slice(j, j + 2));
    }
  }

  str1List.forEach((item) => {
    let matchIndex = str2List.indexOf(item);
    if (matchIndex >= 0) {
      interSectionList.push(item);
      str2List.splice(matchIndex, 1);
    }
  });

  if (str1List.length == 0 && str2List.length == 0) return 65536;
  answer = Math.floor((interSectionList.length / (str1List.length + str2List.length)) * 65536);

  return answer;
}
