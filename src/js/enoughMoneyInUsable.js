import askedDivisibleInPaperMoney from "./askedDivisibleInAvailable.js";
/**
 * @function askedDivisibleInPaperMoney
 * @description Return List with asked money divisible in paper money
 * @returns {Array}
 */
function enoughMoneyInUsable(moneyAsked, cashBox) {
  const usableMoney = askedDivisibleInPaperMoney(moneyAsked, cashBox);

  return usableMoney.filter(usableMoney => {
    return moneyAsked % paperMoney.value === 0;
  });
}

export default enoughMoneyInUsable;
