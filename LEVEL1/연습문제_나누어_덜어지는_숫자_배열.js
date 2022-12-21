function solution(arr, divisor) {
  let answer = [];

  arr.forEach((num) => {
    if (!(num % divisor)) {
      answer.push(num);
    }
  });

  if (!answer.length) {
    return [-1];
  }

  return answer.sort((a, b) => a - b);
}

console.log(solution([5, 9, 7, 10], 5));
