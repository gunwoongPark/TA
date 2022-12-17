function solution(numbers) {
  let answer = 0;
  let tenArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  numbers.forEach((num) => {
    tenArr.splice(
      tenArr.findIndex((el) => el === num),
      1
    );
  });

  tenArr.forEach((el) => (answer += el));

  return answer;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
