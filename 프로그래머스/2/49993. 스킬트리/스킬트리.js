function solution(skill, skill_trees) {
  var answer = -1;
  let skillIdx = 0;
  let notPassSkill = 0;

  for (let eachSkill of skill_trees) {
    skillIdx = 0;
    for (let element of eachSkill) {
      if (!skill.includes(element)) {
        continue;
      } else {
        if (skill[skillIdx] === element) {
          skillIdx++;
          continue;
        } else {
          notPassSkill++;
          break;
        }
      }
    }
  }

  answer = skill_trees.length - notPassSkill;

  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
