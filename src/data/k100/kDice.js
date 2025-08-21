function kDice(n, k, isPremium) {
  let s = 0;

  console.log(`Rolling ${n}d${k} with isPremium=${isPremium}`);

  if (isPremium && n === 1 && k === 10) {
    let roll;
    do {
      roll = Math.floor(Math.random() * k) + 1;
      s += roll;
      console.log(`Rolled: ${roll}, Current sum: ${s}`);
    } while (roll === 10); // powtarzamy, jeśli wypadła 10
  } else {
    for (let i = 0; i < n; i++) {
      s += Math.floor(Math.random() * k) + 1;
    }
  }

  return s;
}

export default kDice;
