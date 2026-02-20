document.getElementById("add-money-btn").addEventListener("click", function () {
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount == "Select a Bank") {
    alert("please select a bank");
    return;
  }
  const accno = getValueFromInput("add-money-number");
  if (accno.length != 11) {
    alert("invalid acc no");
    return;
  }
  const amount = getValueFromInput("add-money-amount");
  const currentBalance = getBalance();
  const newBalance = currentBalance + Number(amount);
  // console.log(newBalance);

  const pin = getValueFromInput("add-money-pin");
  if (pin == "1234") {
    // alert("Add money successful");
    alert(`Add Money Success from
         ${bankAccount} 
         at ${new Date()}`);
    setBalance(newBalance);

    const history = document.getElementById("history-container");

    const newHistory = document.createElement("div");

    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100">
      Add Money Success from
      ${bankAccount} , acc-no ${accno} at ${new Date()}
    </div>
    `;

    history.append(newHistory);
    
  } else {
    alert("Invalid pin");
    return;
  }
});
