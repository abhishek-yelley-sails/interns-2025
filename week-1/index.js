function solution1(name, score) {
    const outcome = score >= 15 ? "passed" : "failed";
  // your solution here
  return `${name} ${outcome} with a score of ${score}`;


}

document
  .getElementById("run1")
  .addEventListener("click", () => runTest1(solution1));

function solution2(name, score, template) {
  const outcome = score >= 15 ? "passed" : "failed";
  // your solution here
  return template.replace("{{name}}", name).replace(/{{score}}/g, score).replace("{{outcome}}", outcome);

}

document
  .getElementById("run2")
  .addEventListener("click", () => runTest2(solution2));
