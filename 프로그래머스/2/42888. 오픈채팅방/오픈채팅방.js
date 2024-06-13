function solution(records) {
  var answer = [];

  let newRecords = [];
  let user = {};

  for (let record of records) {
    newRecords.push(record.split(" "));
  }

  for (let record of newRecords) {
    if (record[0] === "Enter" || record[0] === "Change") {
      user[record[1]] = record[2];
    }
  }

  for (let record of newRecords) {
    if (record[0] === "Enter") {
      answer.push(`${user[record[1]]}님이 들어왔습니다.`);
    } else if (record[0] === "Leave") {
      answer.push(`${user[record[1]]}님이 나갔습니다.`);
    }
  }

  return answer;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
