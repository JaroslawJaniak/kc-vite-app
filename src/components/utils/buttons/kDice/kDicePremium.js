function kDicePremium(n, k) {
  let i = 0;
  let s = 0;

  while (i < n) {
    const result = Math.floor(Math.random() * k) + 1;
    if (result === k) i--;

    s += result;
    i++;
  }

  return s;
}

export default kDicePremium;
