function solution(n) {
  let answer = 0;

  for (let num = 1; num <= n; ++num) {
    if (n % num === 1) {
      answer = num;
      break;
    }
  }

  return answer;
}

console.log(solution(10));
