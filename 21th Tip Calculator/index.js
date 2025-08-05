const billAmount = document.querySelector('#bill-amount-input');
const tipPercentage = document.querySelector('#tip-percentage-input');
const calculate = document.querySelector('#calculate');
const output = document.querySelector('#total-bill');

calculate.addEventListener('click' , () => {
    if (billAmount.value === ''  || tipPercentage.value === '') {
        alert('Please enter the Values');
    }else if (billAmount.value < 0 || tipPercentage.value < 0) {
        alert('Please enter Positive Value');
    }else{
        const billamountvalue = parseFloat(billAmount.value);
        const tippercentagevalue = parseFloat(tipPercentage.value);
        const tipamount = billamountvalue * (tippercentagevalue/100);
        const totalbill = billamountvalue + tipamount;
        output.innerHTML = totalbill;
    }
})