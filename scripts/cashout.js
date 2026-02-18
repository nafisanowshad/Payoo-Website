document.getElementById("cashout-btn").addEventListener("click", function () {
  const cashoutNumberInput = document.getElementById("cashout-number");
  const cashoutNumber = cashoutNumberInput.value;
  //    console.log(cashoutNumber);
  if(cashoutNumber.length !=11){
    alert("Invalid Number");
    return;
  }

  const cashoutAmountInput = document.getElementById("cashout-amount");
  const cashoutAmount = cashoutAmountInput.value;
  //   console.log(cashoutAmount);

  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.value;
  //   console.log(balance);

  const newBalance = Number(balance) - Number(cashoutAmount);
  //   console.log(newBalance);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }

  const cashoutPinInput= document.getElementById("cashout-pin");
  const pin= cashoutPinInput.value;
  if(pin == "1234"){
    alert("Cashout Successful");
    balanceElement.innerText=newBalance;
  }
  else{
    alert("Invalid Pin");
    return;
  }
});
