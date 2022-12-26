function solution(a, b) {
  let answer = 0;

  for (let idx = 0; idx < a.length; ++idx) {
    answer += a[idx] * b[idx];
  }

  return answer;
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
