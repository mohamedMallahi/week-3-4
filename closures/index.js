const levelBadge = document.querySelector('#level');
const increaseLevelButton = document.querySelector('#increaseLevel');

const log = (text) => {
  document.getElementById('output').innerHTML += `<br/> ${text}`;
};

increaseLevelButton.addEventListener('click', () => {
  increaseLevel();
});

const increaseLevel = (() => {
  let level = 0;
  log(`Initial level: ${level}`);
  return () => {
    level += 1;
    levelBadge.textContent = level;
  };
})();

console.log(level);
