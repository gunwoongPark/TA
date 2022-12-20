function solution(absolutes, signs) {
  let answer = 0;

  signs.forEach((sign, index) => {
    if (sign) {
      answer += absolutes[index];
    } else {
      answer -= absolutes[index];
    }
  });

  return answer;
}

console.log(solution([4, 7, 12], [true, false, true]));
