function getRandomNumber({ min, max }) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

function createGradeRandomly() {
  const grade = getRandomNumber({ min: 30, max: 50 }).toString();
  return `${grade[0]}.${grade[1]}`;
}

function createPriceRandomly() {
  const diceResult = getRandomNumber({ min: 0, max: 100 });
  if (diceResult <= 15) {
    return getRandomNumber({ min: 50000, max: 300000 });
  }
  if (diceResult >= 70) {
    return getRandomNumber({ min: 700000, max: 1500000 });
  }
  return getRandomNumber({ min: 300000, max: 700000 });
}

function createOption() {
  const options = [
    '무선 인터넷',
    '주방',
    '에어컨',
    '세탁기',
    '다리미',
    '무료 주차 공간',
    '건조기',
    'TV',
    '수영장',
    '아기 침대',
    '헬스장',
    '바비큐 그릴',
    '아침식사',
    '실내 벽난로',
    '흡연 가능',
    '애견 동반 가능',
  ];
  const range = getRandomNumber({ min: 6, max: 10 });
  const newOptions = [];
  Array.from({ length: range }).forEach(() => {
    const idx = getRandomNumber({ min: 0, max: options.length - 1 });
    if (!newOptions.includes(options[idx])) {
      newOptions.push(options[idx]);
    }
  });
  return newOptions.join(' ∙ ');
}

export { getRandomNumber, createGradeRandomly, createPriceRandomly, createOption };
