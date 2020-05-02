import "../css/index.css";
import cashbox from "./cashbox.js";
import deliverCash from "./deliverCash.js";

const button = document.getElementById("buttonAskForMoney");
button.addEventListener("click", deliverCash);
