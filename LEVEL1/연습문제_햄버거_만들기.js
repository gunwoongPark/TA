function solution(ingredient) {
  let answer = 0;

  const stack = [];

  ingredient.forEach((ing, idx) => {
    stack.push(ing);

    if (stack.length >= 4) {
      const burger = stack.slice(-4).join("");
      if (burger === "1231") {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        answer += 1;
      }
    }
  });

  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
// 1 = 빵
// 2 = 야채
// 3 = 고기
