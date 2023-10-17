
setInterval(restoreDefaults, 1)


function restoreDefaults(){
    const nameField = document.getElementById("CardHolderName")
    const nameInput = document.getElementById("CardHolderNameInput")
    const nameError = document.getElementById("error__name")
    if (nameInput.value === ""){
        nameField.textContent = "John Doe"
        nameError.style = "display:none;"
        nameError.textContent = ""
    }
    const CardNumberField = document.getElementById("CardNumber");
    const CardNumberInput = document.getElementById("CardNumberInput");
    const cardCarrierSvg = document.getElementById("card__carrier_svg");
    const carderror = document.getElementById('error__cardnum')
    if (CardNumberInput.value === ""){
        CardNumberField.textContent = "0000 0000 0000 0000"
        cardCarrierSvg.src = "assets/cerier_default.svg"
        carderror.textContent = ""
        carderror.style = "Display:none;"
    }
    const ccvInputField = document.getElementById("ccvinput")
    const ccvField = document.getElementById("ccvField")
    const ccvError = document.getElementById("error__ccv")
    if (ccvInputField.value === ""){
        ccvField.textContent = "000"
        ccvError.textContent = ""
        ccvError.style = "display:none;"
    }
    const monthInputField = document.getElementById("monthInput")
    const monthField = document.getElementById("month")
    const montnError = document.getElementById("error__date")
    if (monthInputField.value === ""){
        monthField.textContent = "00"
        montnError.textContent = ""
        montnError.style = "Display:none;"
    }
    const yearInputField = document.getElementById("yearInput")
    const yearField = document.getElementById("year")
    const yearError = document.getElementById("error__date")
    if (yearInputField.value === ""){
        yearField.textContent = "00"
        yearError.textContent = ""
        yearError.style = "Display:none;"
    }
    
}







function updateName() {
    const nameField = document.getElementById("CardHolderName");
    const nameInput = document.getElementById("CardHolderNameInput");
    const nameError = document.getElementById("error__name")
    const nameValue = nameInput.value;

    // Regular expression to match alphabetic characters and spaces
    const nameRegex = /^[a-zA-Z ]+$/;

    if (nameRegex.test(nameValue)) {
        nameField.textContent = nameValue;
        nameInput.classList.remove("invalid"); // Remove any previous invalid styling
        nameError.style = "display:none;"
        nameError.textContent = ""
    } else {
        // Display an error message or apply invalid styling
        nameField.textContent = "Invalid Name";
        nameError.style = "display:block;"
        nameError.textContent = "Invalid Name"
        nameInput.classList.add("invalid");
    }
}


function updateCardNumber() {
    const CardNumberInput = document.getElementById("CardNumberInput");
    const cardCarrierSvg = document.getElementById("card__carrier_svg");
    const CardNumberField = document.getElementById("CardNumber");
    const carderror = document.getElementById('error__cardnum')

    // Remove non-numeric characters
    const inputValue = CardNumberInput.value.replace(/\D/g, '');

    let formattedValue = '';
    for (let i = 0; i < inputValue.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedValue += ' '; // Add a space every 4 digits
        }
        formattedValue += inputValue[i];
    }

    CardNumberInput.value = formattedValue;
    CardNumberField.textContent = formattedValue;
    // Determine the card carrier based on patterns in the card number
    if (/^4/.test(inputValue)) {
        cardCarrierSvg.src = 'assets/visa-svgrepo-com.svg';
        carderror.textContent = ""
        carderror.style = "Display:none;"
    } else if (/^5/.test(inputValue)) {
        cardCarrierSvg.src = 'assets/mastercard-svgrepo-com.svg';
        carderror.textContent = ""
        carderror.style = "Display:none;"
    } else if (/^3/.test(inputValue)) {
        cardCarrierSvg.src = 'assets/amex-3-svgrepo-com.svg';
        carderror.textContent = ""
        carderror.style = "Display:none;"
    } else {
        cardCarrierSvg.src = "assets/cerier_default.svg"
        CardNumberField.textContent = "0000 0000 0000 0000";
        carderror.textContent = "Invalid Card Number"
        carderror.style = "Display:block;"
    }
}


    
function updateCcvNumber() {
    const ccvInputField = document.getElementById("ccvinput");
    const ccvField = document.getElementById("ccvField");
    const ccvError = document.getElementById("error__ccv")
    const ccvValue = ccvInputField.value;

    // Check if the input is a 3-digit number
    if ((/^\d{3}$/.test(ccvValue))) {
        ccvField.textContent = ccvValue;
        ccvInputField.classList.remove("invalid"); // Remove any previous invalid styling
        ccvError.textContent = ""
        ccvError.style = "Display:none;"
    } else {
        // Display an error message or apply invalid styling
        if (ccvValue.length === 3){
            ccvField.textContent = "Invalid CCV";
            ccvError.textContent = "Invalid CCV"
            ccvError.style = "Display:block;"
            ccvInputField.classList.add("invalid");
        }
    }
}
function updateExpMonth() {
    const monthInputField = document.getElementById("monthInput");
    const monthField = document.getElementById("month");
    const Error = document.getElementById("error__date")
    const inputValue = monthInputField.value.replace(/\D/g, '');
    const monthValue = inputValue;

    // Check if the input is a valid month (1-12)
    const isValidMonth = /^\d{1,2}$/.test(monthValue) && parseInt(monthValue, 10) >= 1 && parseInt(monthValue, 10) <= 12;

    if (isValidMonth) {
        monthField.textContent = monthValue;
        monthInputField.classList.remove("invalid"); // Remove any previous invalid styling
        Error.textContent = ""
        Error.style = "Display:none;"
    } else {
        // Display an error message or apply invalid styling
        monthField.textContent = "Invalid Month";
        Error.textContent = "Invalid Month"
        Error.style = "Display:block;"
        monthInputField.classList.add("invalid");
    }
}
function updateExpYear() {
    const yearInputField = document.getElementById("yearInput");
    const yearField = document.getElementById("year");
    const Error = document.getElementById("error__date")
    const yearValue = yearInputField.value;

    // Check if the input is a valid year (four digits)
    const isValidYear = /^\d{1,2}$/.test(yearValue) && parseInt(yearValue, 10) >= 23 && parseInt(yearValue, 10) <= 30;;

    if (isValidYear) {
        yearField.textContent = yearValue;
        yearInputField.classList.remove("invalid"); // Remove any previous invalid styling
        Error.textContent = ""
        Error.style = "Display:none;"
    } else {
        // Display an error message or apply invalid styling
        yearField.textContent = "Invalid Year";
        yearInputField.classList.add("invalid");
        Error.textContent = "Invalid Year"
        Error.style = "Display:block;"
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