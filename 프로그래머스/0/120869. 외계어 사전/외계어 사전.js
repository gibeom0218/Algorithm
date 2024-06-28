function initialSpellObj(spellArr, spellObj) {
  for (let ch of spellArr) {
    spellObj[ch] = 0;
  }
}

function solution(spell, dic) {
  var answer = 2;
  let spellObj = {};

  for (let word of dic) {
    if (word.length === spell.length) {
      initialSpellObj(spell, spellObj);
      for (let ch of word) {
        if (spell.includes(ch) && spellObj[ch] === 0) {
          answer = 1;
          spellObj[ch]++;
        } else {
          answer = 2;
          break;
        }
      }
    }
  }

  return answer;
}

solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"]);
