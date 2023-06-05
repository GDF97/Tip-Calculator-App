const btnCalc = document.getElementById("btnCalc");
const btnReset = document.getElementById("btnReset");
const buttonsPorcents = document.querySelectorAll(".porcent");
const billAmount = document.getElementById("billInput");
const numberOfPeople = document.getElementById("peopleInput");
const totalAmount = document.getElementById("totalAmount");
const tipAmountPerson = document.getElementById("tipAmount");

let porcentValue = 0;
let tipValuePerson = 0;
let tipTotalValue = 0;

buttonsPorcents.forEach((button) => {
  button.addEventListener("click", (e) => {
    button = e.target;
    porcentValue = button.value;
  });
});

btnCalc.addEventListener("click", () => {
  if (
    porcentValue === 0 ||
    billAmount.value == 0 ||
    numberOfPeople.value <= 0
  ) {
    console.log("Erro");
    if (billAmount.value == 0) {
      billAmount.style.border = "1px solid red";
    } else {
      billAmount.style.border = "none";
    }
    if (numberOfPeople.value == 0) {
      numberOfPeople.style.border = "1px solid red";
    } else {
      numberOfPeople.style.border = "none";
    }
  } else {
    tipTotalValue = billAmount.value * porcentValue;
    tipValuePerson = tipTotalValue / numberOfPeople.value;
    tipAmountPerson.textContent = `$${tipValuePerson.toFixed(2)} `;
    totalAmount.textContent = `$${tipTotalValue.toFixed(2)}`;
    btnCalc.style.display = "none";
    btnReset.style.display = "flex";
    console.table(
      porcentValue,
      tipTotalValue,
      tipValuePerson,
      billAmount.value,
      numberOfPeople.value
    );
  }
});

btnReset.addEventListener("click", () => {
  btnCalc.style.display = "flex";
  btnReset.style.display = "none";
  porcentValue = 0;
  tipValuePerson = 0;
  tipTotalValue = 0;
  billAmount.value = 0;
  numberOfPeople.value = 0;
  totalAmount.textContent = `$0.00`;
  tipAmountPerson.textContent = `$0.00`;

  console.table(
    porcentValue,
    tipTotalValue,
    tipValuePerson,
    billAmount.value,
    numberOfPeople.value
  );
});
