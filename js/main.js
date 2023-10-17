
setInterval(restoreDefaults, 1)


function restoreDefaults(){
    const nameField = document.getElementById("CardHolderName")
    const nameInput = document.getElementById("CardHolderNameInput")
    if (nameInput.value === ""){
        nameField.textContent = "John Doe"
    }
    const CardNumberField = document.getElementById("CardNumber");
    const CardNumberInput = document.getElementById("CardNumberInput");
    if (CardNumberInput.value === ""){
        CardNumberField.textContent = "0000 0000 0000 0000"
    }
    const ccvInputField = document.getElementById("ccvinput")
    const ccvField = document.getElementById("ccvField")
    if (ccvInputField.value === ""){
        ccvField.textContent = "000"
    }
    const monthInputField = document.getElementById("monthInput")
    const monthField = document.getElementById("month")
    if (monthInputField.value === ""){
        monthField.textContent = "00"
    }
    const yearInputField = document.getElementById("yearInput")
    const yearField = document.getElementById("year")
    if (yearInputField.value === ""){
        yearField.textContent = "00"
    }
    
}







function updateName() {
    const nameField = document.getElementById("CardHolderName");
    const nameInput = document.getElementById("CardHolderNameInput");
    const nameValue = nameInput.value;

    // Regular expression to match alphabetic characters and spaces
    const nameRegex = /^[a-zA-Z ]+$/;

    if (nameRegex.test(nameValue)) {
        nameField.textContent = nameValue;
        nameInput.classList.remove("invalid"); // Remove any previous invalid styling
    } else {
        // Display an error message or apply invalid styling
        nameField.textContent = "Invalid Name";
        nameInput.classList.add("invalid");
    }
}


function updateCardNumber() {
    const CardNumberField = document.getElementById("CardNumber");
    const CardNumberInput = document.getElementById("CardNumberInput");
    const inputValue = CardNumberInput.value.replace(/\D/g, ''); // Remove non-numeric characters
    let formattedValue = '';

    for (let i = 0; i < inputValue.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedValue += ' '; // Add a space every 4 digits
        }
        formattedValue += inputValue[i];
    }

    CardNumberInput.value = formattedValue;
    CardNumberField.textContent = formattedValue;
}


    
function updateCcvNumber() {
    const ccvInputField = document.getElementById("ccvinput");
    const ccvField = document.getElementById("ccvField");
    const ccvValue = ccvInputField.value;

    // Check if the input is a 3-digit number
    if ((/^\d{3}$/.test(ccvValue))) {
        ccvField.textContent = ccvValue;
        ccvInputField.classList.remove("invalid"); // Remove any previous invalid styling
    } else {
        // Display an error message or apply invalid styling
        if (ccvValue.length === 3){
            ccvField.textContent = "Invalid CCV";
            ccvInputField.classList.add("invalid");
        }
    }
}
function updateExpMonth() {
    const monthInputField = document.getElementById("monthInput");
    const monthField = document.getElementById("month");
    const monthValue = monthInputField.value;

    // Check if the input is a valid month (1-12)
    const isValidMonth = /^\d{1,2}$/.test(monthValue) && parseInt(monthValue, 10) >= 1 && parseInt(monthValue, 10) <= 12;

    if (isValidMonth) {
        monthField.textContent = monthValue;
        monthInputField.classList.remove("invalid"); // Remove any previous invalid styling
    } else {
        // Display an error message or apply invalid styling
        monthField.textContent = "Invalid Month";
        monthInputField.classList.add("invalid");
    }
}
function updateExpYear() {
    const yearInputField = document.getElementById("yearInput");
    const yearField = document.getElementById("year");
    const yearValue = yearInputField.value;

    // Check if the input is a valid year (four digits)
    const isValidYear = /^\d{4}$/.test(yearValue);

    if (isValidYear) {
        yearField.textContent = yearValue;
        yearInputField.classList.remove("invalid"); // Remove any previous invalid styling
    } else {
        // Display an error message or apply invalid styling
        yearField.textContent = "Invalid Year";
        yearInputField.classList.add("invalid");
    }
}

function isValidCreditCardNumber(cardNumber) {
    // Remove spaces and non-digit characters
    cardNumber = cardNumber.replace(/\D/g, '');
  
    if (!/^\d{13,19}$/.test(cardNumber)) {
      return false; // Check if the card number has a valid length
    }
  
    let sum = 0;
    let doubleUp = false;
  
    // Loop through each digit in reverse order
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i), 10);
  
      if (doubleUp) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
  
      sum += digit;
      doubleUp = !doubleUp;
    }
  
    return sum % 10 === 0;
  }