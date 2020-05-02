import cashBox from "./cashbox.js";
import PaperMoney from "./classes/PaperMoney.js";
import askedDivisibleInPaperMoney from "./askedDivisibleInAvailable.js";

/**
 * @function deliverCash
 * @description Delivery Cash Asked for the Client rendering it in the HTML
 * @returns {HTMLString}
 * @todo separate this in multiples pure functions using the functional approach
 */

function deliverCash() {
  const delivered = [];
  let division = 0;
  let available = 0;
  let result = document.getElementById("resultado");
  let moneyAskedString = document.getElementById("moneyAsked");
  const moneyAsked = parseInt(moneyAskedString.value);
  let moneyAskedFlow = moneyAsked;

  const totalMoney = cashBox.reduce((current, accumulator) => {
    return accumulator.value * accumulator.quantity + current;
  }, 0);

  cashBox.map(moneyPaperItem => {
    if (moneyAsked > 0) {
      division = Math.floor(moneyAsked / moneyPaperItem.value);
      console.log(
        `Division with Paper Cash of $${moneyPaperItem.value} equal ${division}`
      );
      if (division > moneyPaperItem.quantity) {
        available = moneyPaperItem.quantity;
      } else {
        available = division;
      }
      delivered.push(new PaperMoney(available, moneyPaperItem.value));
      moneyAskedFlow = moneyAskedFlow - moneyPaperItem.value * available;
    }
  });

  if (moneyAsked > totalMoney) {
    return (result.innerHTML =
      "Soy un cajero pobre y no tengo plata suficiente :(");
  } else {
    delivered.map(paperMoneyDelivered => {
      console.log(
        `${paperMoneyDelivered.quantity} paper cash of $${paperMoneyDelivered.value} delivered`
      );

      if (paperMoneyDelivered.quantity > 0) {
        result.innerHTML += `<br>
            ${paperMoneyDelivered.quantity} billetes de 
            $${paperMoneyDelivered.value}`;
      }
    });
  }
}

export default deliverCash;
