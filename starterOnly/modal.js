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

  const firstNameError = document.getElementById("first-error");

  if (!firstNameRegex.test(firstNameValue)) {
    console.log('Le champ Prénom doit contenir au moins 2 lettres.');
    firstNameError.textContent = "Le prénom doit contenir au moins 2 lettres.";
    firstName.classList.add("error");
    firstNameError.style.display = "block";
    isValid = false;
  } else {
    console.log('Le champ Prénom est rempli et valide.');
    firstNameError.textContent = "";
    firstNameError.style.display = "none";
    firstName.classList.remove("error");
  }

  // verify if lastname > 2 letters
  const lastName = document.getElementById("last");
  const lastNameValue = lastName.value.trim();
  const lastNameRegex = /^[a-zA-Z]{2,}$/;

  const lastNameError = document.getElementById("last-error");

  if (!lastNameRegex.test(lastNameValue)) {
    console.log('Le champ Nom doit contenir au moins 2 lettres.');
    lastNameError.textContent = "Le Nom doit contenir au moins 2 lettres.";
    lastName.classList.add("error");
    lastNameError.style.display = "block";
    isValid = false;
  } else {
    console.log('Le champ Prénom est rempli et valide.');
    lastNameError.textContent = "";
    lastNameError.style.display = "none";
    lastName.classList.remove("error");
  }

  // verify if email is valid
  const email = document.getElementById("email");
  const emailValue = email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const emailError = document.getElementById("email-error");

  if (!emailRegex.test(emailValue)) {
    console.log('Le champ Email doit être valide.');
    emailError.textContent = "L'Email renseigné n'est pas valide.";
    email.classList.add("error");
    emailError.style.display = "block";
    isValid = false;
  } else {
    console.log('Le champ Email est rempli et valide.');
    emailError.textContent = "";
    emailError.style.display = "none";
    email.classList.remove("error");
  }

  // verify if birthdate has been submitted
  const birthdateInput = document.getElementById("birthdate");
  const birthdateValue = birthdateInput.value;

  const birthdateError = document.getElementById("birthdate-error");

  if (birthdateValue === "") {
    console.log("Veuillez choisir une date de naissance.");
    birthdateError.textContent = "Veuillez indiquer votre date de naissance.";
    birthdate.classList.add("error");
    birthdateError.style.display = "block";
    isValid = false;
  } else {
      console.log("La date de naissance est sélectionnée.");
      birthdateError.textContent = "";
      birthdateError.style.display = "none";
      birthdate.classList.remove("error");
  }

  // verify if quantity is a number
  const quantityInput = document.getElementById("quantity");
  const quantityValue = parseInt(quantityInput.value, 10);

  const quantityError = document.getElementById("quantity-error");

  if (isNaN(quantityValue)) {
    console.log("Veuillez entrer un nombre de concours valide.");
    quantityError.textContent = "Veuillez indiquer un nombre valide.";
    quantity.classList.add("error");
    quantityError.style.display = "block";
    isValid = false;
  } else {
    console.log("Nombre de concours valide.");
    quantityError.textContent = "";
    quantityError.style.display = "none";
    quantity.classList.remove("error");
  }

  // verify if a city has been selected
  const location = document.querySelectorAll('input[type="radio"][name^="location"]');
  let selectedLocation = false;

  const locationError = document.getElementById("location-error");

  location.forEach(location => {
      if (location.checked) {
          selectedLocation = true;
      }
  });

  if (!selectedLocation) {
      console.log("Veuillez sélectionner une ville.");
      locationError.textContent = "Vous devez choisir une option.";
      locationError.style.display = "block";
      isValid = false;
  } else {
      console.log("Une ville a bien été sélectionnée.");
      locationError.textContent = "";
      quantityError.style.display = "none";
  }


  // verify if the user has agreed to the terms and conditions
  const termsCheckbox = document.getElementById("checkbox1");

  const termsCheckboxError = document.getElementById("terms-error");

  if (termsCheckbox.checked) {
    console.log("Les termes et conditions ont été acceptés.");
    termsCheckboxError.textContent = "";
    termsCheckboxError.style.display = "none";
  } else {
    console.log("Veuillez accepter les termes et conditions avant de soumettre le formulaire.");
    termsCheckboxError.textContent = "Vous devez vérifier que vous acceptez les termes et conditions.";
    termsCheckboxError.style.display = "block";
    isValid = false;
  }

  return isValid;
}
