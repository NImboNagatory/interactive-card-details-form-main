setInterval(restoreDefaults, 1);

function restoreDefaults() {
  const nameField = document.getElementById("CardHolderName");
  const nameInput = document.getElementById("CardHolderNameInput");
  const nameError = document.getElementById("error__name");
  if (nameInput.value === "") {
    nameField.textContent = "John Doe";
    nameError.style = "display:none;";
    nameError.textContent = "";
  }
  const CardNumberField = document.getElementById("CardNumber");
  const CardNumberInput = document.getElementById("CardNumberInput");
  const cardCarrierSvg = document.getElementById("card__carrier_svg");
  const carderror = document.getElementById("error__cardnum");
  if (CardNumberInput.value === "") {
    CardNumberField.textContent = "0000 0000 0000 0000";
    cardCarrierSvg.src = "assets/cerier_default.svg";
    carderror.textContent = "";
    carderror.style = "Display:none;";
  }
  const ccvInputField = document.getElementById("ccvinput");
  const ccvField = document.getElementById("ccvField");
  const ccvError = document.getElementById("error__ccv");
  if (ccvInputField.value === "") {
    ccvField.textContent = "000";
    ccvError.textContent = "";
    ccvError.style = "display:none;";
  }
  const monthInputField = document.getElementById("monthInput");
  const monthField = document.getElementById("month");
  if (monthInputField.value === "") {
    monthField.textContent = "00";
  }
  const yearInputField = document.getElementById("yearInput");
  const yearField = document.getElementById("year");
  const dateError = document.getElementById("error__date");
  if (yearInputField.value === "") {
    yearField.textContent = "00";
  }
  if (yearInputField.value === "" && monthInputField.value === "") {
    dateError.textContent = "";
    dateError.style = "Display:none;";
  }
  
}

window.addEventListener('resize', function() {
  if (window.innerWidth < 540) {
    window.innerWidth = 540; // Set the window width to a minimum of 540px
  }
});

function updateName() {
  const nameField = document.getElementById("CardHolderName");
  const nameInput = document.getElementById("CardHolderNameInput");
  const nameError = document.getElementById("error__name");
  const nameValue = nameInput.value;

  // Regular expression to match alphabetic characters and spaces
  const nameRegex = /^[a-zA-Z ]+$/;

  if (nameRegex.test(nameValue)) {
    nameField.textContent = nameValue;
    nameInput.classList.remove("invalid"); // Remove any previous invalid styling
    nameError.style = "display:none;";
    nameError.textContent = "";
    return true
  } else {
    // Display an error message or apply invalid styling
    nameField.textContent = "Invalid Name";
    nameError.style = "display:block;";
    nameError.textContent = "Invalid Name";
    nameInput.classList.add("invalid");
    return false
  }
}

function updateCardNumber() {
  const CardNumberInput = document.getElementById("CardNumberInput");
  const cardCarrierSvg = document.getElementById("card__carrier_svg");
  const CardNumberField = document.getElementById("CardNumber");
  const carderror = document.getElementById("error__cardnum");

  // Remove non-numeric characters
  const inputValue = CardNumberInput.value.replace(/\D/g, "");

  let formattedValue = "";
  for (let i = 0; i < inputValue.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedValue += " "; // Add a space every 4 digits
    }
    formattedValue += inputValue[i];
  }

  CardNumberInput.value = formattedValue;
  CardNumberField.textContent = formattedValue;
  // Determine the card carrier based on patterns in the card number
  if (/^4/.test(inputValue)) {
    cardCarrierSvg.src = "assets/visa-svgrepo-com.svg";
    carderror.textContent = "";
    carderror.style = "Display:none;";
  } else if (/^5/.test(inputValue)) {
    cardCarrierSvg.src = "assets/mastercard-svgrepo-com.svg";
    carderror.textContent = "";
    carderror.style = "Display:none;";
  } else if (/^3/.test(inputValue)) {
    cardCarrierSvg.src = "assets/amex-3-svgrepo-com.svg";
    carderror.textContent = "";
    carderror.style = "Display:none;";
  } else {
    cardCarrierSvg.src = "assets/cerier_default.svg";
    CardNumberField.textContent = "0000 0000 0000 0000";
    carderror.textContent = "Invalid Card Number";
    carderror.style = "Display:block;";
  }
  return true
}

function updateCcvNumber() {
  const ccvInputField = document.getElementById("ccvinput");
  const ccvField = document.getElementById("ccvField");
  const ccvError = document.getElementById("error__ccv");
  const ccvValue = ccvInputField.value;

  // Check if the input is a 3-digit number
  if (/^\d{3}$/.test(ccvValue)) {
    ccvField.textContent = ccvValue;
    ccvInputField.classList.remove("invalid"); // Remove any previous invalid styling
    ccvError.textContent = "";
    ccvError.style = "Display:none;";
    return true
  } else {
    // Display an error message or apply invalid styling
    if (ccvValue.length === 3) {
      ccvField.textContent = "Invalid CCV";
      ccvError.textContent = "Invalid CCV";
      ccvError.style = "Display:block;";
      ccvInputField.classList.add("invalid");
      return false
    }
  }
}

// Depracted
function updateExpMonth() {
  const monthInputField = document.getElementById("monthInput");
  const monthField = document.getElementById("month");
  const Error = document.getElementById("error__date");
  const inputValue = monthInputField.value.replace(/\D/g, "");
  const monthValue = inputValue;

  // Check if the input is a valid month (1-12)
  const isValidMonth =
    /^\d{1,2}$/.test(monthValue) &&
    parseInt(monthValue, 10) >= 1 &&
    parseInt(monthValue, 10) <= 12;

  if (isValidMonth) {
    monthField.textContent = monthValue;
    monthInputField.classList.remove("invalid"); // Remove any previous invalid styling
    Error.textContent = "";
    Error.style = "Display:none;";
    return true
  } else {
    // Display an error message or apply invalid styling
    monthField.textContent = "Invalid Month";
    Error.textContent = "Invalid Month";
    Error.style = "Display:block;";
    monthInputField.classList.add("invalid");
    return false
  }
}

// Depracted
function updateExpYear() {
  const yearInputField = document.getElementById("yearInput");
  const yearField = document.getElementById("year");
  const Error = document.getElementById("error__date");
  const yearValue = yearInputField.value;

  // Check if the input is a valid year (four digits)
  const isValidYear =
    /^\d{1,2}$/.test(yearValue) &&
    parseInt(yearValue, 10) >= 23 &&
    parseInt(yearValue, 10) <= 30;

  if (isValidYear) {
    yearField.textContent = yearValue;
    yearInputField.classList.remove("invalid"); // Remove any previous invalid styling
    Error.textContent = "";
    Error.style = "Display:none;";
    return true
  } else {
    // Display an error message or apply invalid styling
    yearField.textContent = "Invalid Year";
    yearInputField.classList.add("invalid");
    Error.textContent = "Invalid Year";
    Error.style = "Display:block;";
    return false
  }
}

function checkexpDate() {
  const monthInputField = document.getElementById("monthInput");
  const monthField = document.getElementById("month");
  const monthValue = monthInputField.value;

  const yearInputField = document.getElementById("yearInput");
  const yearField = document.getElementById("year");
  const yearValue = yearInputField.value;

  const Error = document.getElementById("error__date");

  const isValidMonth =
    /^\d{1,2}$/.test(monthValue) &&
    parseInt(monthValue, 10) >= 1 &&
    parseInt(monthValue, 10) <= 12;
  const isValidYear =
    /^\d{1,2}$/.test(yearValue) &&
    parseInt(yearValue, 10) >= 23 &&
    parseInt(yearValue, 10) <= 30;

  if ((!isValidMonth) && (!isValidYear)) {
    yearField.textContent = "Invalid Year";
    monthField.textContent = "Invalid Month";
    yearInputField.classList.add("invalid");
    monthInputField.classList.add("invalid");
    Error.textContent = "Invalid Year/Month";
    Error.style = "Display:block;";
    return false
  } else if (!isValidMonth) {
    // Display an error message or apply invalid styling
    monthField.textContent = "Invalid Month";
    Error.textContent = "Invalid Month";
    Error.style = "Display:block;";
    monthInputField.classList.add("invalid");
    return false
  } else if (!isValidYear) {
    // Display an error message or apply invalid styling
    yearField.textContent = "Invalid Year";
    yearInputField.classList.add("invalid");
    Error.textContent = "Invalid Year";
    Error.style = "Display:block;";
    return false
  } else {
    yearField.textContent = yearValue;
    monthField.textContent = monthValue;
    Error.textContent = "";
    Error.style = "Display:none;";
    return true
  }
}

// depracted
function isValidCreditCardNumber(cardNumber) {
  // Remove spaces and non-digit characters
  cardNumber = cardNumber.replace(/\D/g, "");

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




function finalCheck() {
    debugger
    // Reset error messages
    document.getElementById("error__name").textContent = "";
    document.getElementById("error__cardnum").textContent = "";
    document.getElementById("error__date").textContent = "";
    document.getElementById("error__ccv").textContent = "";

    // Validate cardholder name
    if (!updateName()) {
      document.getElementById("error__name").textContent = "Invalid name format";
      return false;
    }

    // Validate card number
    if (!updateCardNumber()) {
      document.getElementById("error__cardnum").textContent = "Invalid card number format";
      return false;
    }

    // Validate expiration date
    if (!checkexpDate()) {
      document.getElementById("error__date").textContent = "Invalid expiration date";
      return false;
    }

    // Validate CCV
    if (!updateCcvNumber()) {
      document.getElementById("error__ccv").textContent = "Invalid CCV format";
      return false;
    }

    // If all validations pass, the form will be submitted
    cardHolderName = ""
    cardNumber= ""
    month = ""
    year = ""
    ccv= ""
    return true;
  }


  function saveCard(){
    if (finalCheck()){
        const inputContainer = document.getElementById("info__container")
        const confirmContainer = document.getElementById("confirmation__container")
        inputContainer.style = "Display:none;"
        confirmContainer.style = "Display:flex;"
    }
  }

  function backtoinput(){
    const nameInput = document.getElementById("CardHolderNameInput");
    const CardNumberInput = document.getElementById("CardNumberInput");
    const ccvInputField = document.getElementById("ccvinput");
    const yearInputField = document.getElementById("yearInput");
    const monthField = document.getElementById("month");

    nameInput.value = ""
    CardNumberInput.value = ""
    ccvInputField.value = ""
    yearInputField.value = ""
    monthField.value = ""

    const inputContainer = document.getElementById("info__container")
    const confirmContainer = document.getElementById("confirmation__container")
    inputContainer.style = "Display:flex;"
    confirmContainer.style = "Display:none;"
  }