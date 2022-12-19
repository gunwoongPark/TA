function solution(left, right) {
  let answer = 0;

  for (num = left; num <= right; ++num) {
    let measureCount = 1;

    for (let idx = 1; idx <= num - 1; ++idx) {
      if (num % idx === 0) measureCount += 1;
    }

    if (measureCount % 2 === 0) answer += num;
    else answer -= num;
  }

  return answer;
}

console.log(solution(13, 17));
