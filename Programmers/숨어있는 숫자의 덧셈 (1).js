function solution(my_string) {
  const num = my_string.split("");
  var result = 0;
  
  for(var i = 0; i < num.length; i++){
    if(Number(num[i])) result += Number(num[i])
  }
    
  return result
}
