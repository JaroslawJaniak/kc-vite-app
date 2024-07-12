function kDice(n, k) {
  let i = 0;
  let s = 0;

  while (i < n) {
    s = s + Math.floor(Math.random() * k) + 1;
    i++;
  }

  return s;
}

export default kDice;
