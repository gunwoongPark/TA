function solution(survay, choices) {
  const score = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  choices.forEach((choice, index) => {
    const [disagree, agree] = survay[index];

    score[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  const types = ["RT", "CF", "JM", "AN"];
  const answer = types.map(([a, b]) => (score[b] > score[a] ? b : a)).join("");

  return answer;
}

solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]);
