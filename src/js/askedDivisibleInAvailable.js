/**
 * @function askedDivisibleInPaperMoney
 * @description Return List with asked money divisible in paper money
 * @returns {Array}
 */
function askedDivisibleInPaperMoney(moneyAsked, cashBox) {
  // pidieron 3 lucas
  // tengo 5 lucas en 1 billete de 5
  // tengo 5 lucas 3 billetes de 1mil y 1 de 2mil

  return cashBox.filter(paperMoney => {
    return moneyAsked % paperMoney.value === 0;
  });
}

export default askedDivisibleInPaperMoney;
