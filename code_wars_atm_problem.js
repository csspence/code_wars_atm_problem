/*
There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.

You are given money in nominal value of n with 1<=n<=1500.

Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.

Good Luck!!!
*/

const solve = (n) => {
  const denominations = [10, 20, 50, 100, 200, 500];
  let amountLeft = n;
  let minimal = 0;
  for(let i = denominations.length - 1; i > -1; i--) {
    if(amountLeft > denominations[i]) {
      amountLeft -= denominations[i];
      minimal++;
      i++;
    }
  }
  if(minimal > 0) {
    return minimal;
  }
  return -1;
}