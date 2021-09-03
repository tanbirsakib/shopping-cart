function inputHandler(input, totalInput, price) {
  const inputField = document.getElementById(totalInput);
  const currentInputValue = parseInt(inputField.value);
  if (input == "case-plus" || input == 'phone-plus') {
    inputField.value = currentInputValue + 1;
  } else if (input == "case-minus" || input == 'phone-minus') {
    if (currentInputValue > 0) {
      inputField.value = currentInputValue - 1;
    }
  }
  const unitPrice = document.getElementById(price);
  if(price == 'case-price'){
    unitPrice.innerText = inputField.value * 59;
  }else{
    unitPrice.innerText = inputField.value * 1219;
  }
}

function InputTaker(input, totalInput, price){
  document.getElementById(input).addEventListener("click", function () {
    inputHandler(input, totalInput, price);
  });
}
InputTaker('case-plus' ,'case-input', 'case-price');
InputTaker('case-minus', 'case-input', 'case-price');
InputTaker('phone-plus', 'phone-input', 'phone-price');
InputTaker('phone-minus', 'phone-input', 'phone-price');


