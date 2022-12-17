function solution(price, money, count) {
  let answer = 0;

  let cost = 0;

  for (let idx = 1; idx < count + 1; ++idx) {
    cost += price * idx;
  }

  if (money >= cost) answer = 0;
  else answer = cost - money;

  return answer;
}

console.log(solution(1, 1, 2));
