// total balance
const totalBalanceElement = document.getElementById('total-balance');
// deposit
const depositBalanceElement = document.getElementById('deposit-balance');
const depositField = document.getElementById('deposit-input');

document.getElementById('deposit').addEventListener('click', function(){ 
    const newDepositAmount = parseFloat(depositField.value);
    const previousDepositbalance = parseFloat(depositBalanceElement.innerText);
    const previousTotalBalance = parseFloat(totalBalanceElement.innerText);
    if(isNaN(newDepositAmount)){
        alert('please provide a valid number');
        return;
    }
    const currentDepositBalance = previousDepositbalance + newDepositAmount;
    const currentTotalBalance = previousTotalBalance + newDepositAmount;
    depositBalanceElement.innerText = currentDepositBalance;
    totalBalanceElement.innerText = currentTotalBalance;
    depositField.value='';
})

// withdraw
const withdrawBalanceElement = document.getElementById('withdraw-balance');
const withdrawField = document.getElementById('withdraw-input');
document.getElementById('withdraw').addEventListener('click', function(){
    const newWithdrawAmount = parseFloat(withdrawField.value);
    const previousWithdrawBalance = parseFloat(withdrawBalanceElement.innerText);
    const previousTotalBalance = parseFloat(totalBalanceElement.innerText);
    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number');
        return;
    }
    if(newWithdrawAmount > previousTotalBalance){
        alert("tor Baap er bank a eto taka nai");
        return;
    }
    const currentWithdwawBalance = previousWithdrawBalance + newWithdrawAmount;
    const currentTotalBalance = previousTotalBalance - newWithdrawAmount;
    withdrawBalanceElement.innerText = currentWithdwawBalance;
    totalBalanceElement.innerText = currentTotalBalance;
    withdrawField.value= '';
})
