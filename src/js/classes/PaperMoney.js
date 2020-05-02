/**
* Paper Money Class 
* @class
* @example
* new PaperMoney(10, 100);
* @todo associate this with a CashBox class
*
*/
class PaperMoney {
	/**
	* @param {Number} quantity   quantity of paper money
	* @param {Number} value   value of the paper money
	*/
  constructor(quantity, value) {
    this.quantity = quantity;
    this.value = value;
  }
}

export default PaperMoney