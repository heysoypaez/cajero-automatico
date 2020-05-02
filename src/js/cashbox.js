import PaperMoney from "./classes/PaperMoney.js";

/**
 * Cashbox contains all the paper money
 * @example
 * [{quantity: 1, value: 100 },
 *  {quantity: 5, value: 50 }.
 *  {quantity: 10, value: 20 }]
 */
const cashBox = [];
cashBox.push(new PaperMoney(3, 5));
cashBox.push(new PaperMoney(20, 1));
cashBox.push(new PaperMoney(2, 100));
cashBox.push(new PaperMoney(20, 50));
cashBox.push(new PaperMoney(200, 10));

console.log(cashBox);

export default cashBox;
