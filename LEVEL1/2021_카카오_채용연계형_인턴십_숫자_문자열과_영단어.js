function solution(s) {
  let answer = s;

  const strArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  strArr.forEach((str, idx) => {
    answer = answer.split(str).join(String(idx));
  });

  return Number(answer);
}

console.log(solution("one4seveneight"));
