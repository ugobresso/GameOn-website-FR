function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const modalCloseBtn = document.querySelectorAll(".close");

const form = document.querySelector("form");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// submit validation event
form.addEventListener("submit", (event) => {
  const isValid = validate();

  if (isValid) {
    return true;
  } else {
    event.preventDefault();
    return false;
  }
});

// submit validation form

function validate () {
  let isValid = true;

  // verify if firstname > 2 letters
  const firstName = document.getElementById("first");
  const firstNameValue = firstName.value.trim();
  const firstNameRegex = /^[a-zA-Z]{2,}$/;

  if (!firstNameRegex.test(firstNameValue)) {
    console.log('Le champ Prénom doit contenir au moins 2 lettres.');
    isValid = false;
  } else {
    console.log('Le champ Prénom est rempli et valide.');
  }

  // verify if lastname > 2 letters
  const lastName = document.getElementById("last");
  const lastNameValue = lastName.value.trim();
  const lastNameRegex = /^[a-zA-Z]{2,}$/;

  if (!lastNameRegex.test(lastNameValue)) {
    console.log('Le champ Nom doit contenir au moins 2 lettres.');
    isValid = false;
  } else {
    console.log('Le champ Nom est rempli et valide.');
  }

  // verify if email is valid
  const email = document.getElementById("email");
  const emailValue = email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    console.log('Le champ Email doit être valide.');
    isValid = false;
  } else {
    console.log('Le champ Email est rempli et valide.');
  }

  // verify if quantity is a number
  const quantityInput = document.getElementById("quantity");
  const quantityValue = parseInt(quantityInput.value, 10);

  if (isNaN(quantityValue)) {
    console.log("Veuillez entrer un nombre de concours valide.");
    isValid = false;
  } else {
    console.log("Nombre de concours valide.");
  }

  // verify if a city has been selected
  const locations = document.querySelectorAll('input[type="radio"][name^="location"]');
  let selectedLocation = false;

  locations.forEach(location => {
      if (location.checked) {
          selectedLocation = true;
      }
  });

  if (!selectedLocation) {
      console.log("Veuillez sélectionner une ville.");
      isValid = false;
  } else {
      console.log("Une ville a bien été sélectionnée.");
  }


  // verify if the user has agreed to the terms and conditions
  const termsCheckbox = document.getElementById("checkbox1");

  if (termsCheckbox.checked) {
    console.log("Les termes et conditions ont été acceptés.");
  } else {
    console.log("Veuillez accepter les termes et conditions avant de soumettre le formulaire.");
  }

  return isValid;
}
