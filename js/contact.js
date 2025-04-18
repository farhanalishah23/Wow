 // Function to validate form
 document.getElementById("contactForm").addEventListener("submit", function(event) {
    let valid = true;
    
    // Name Validation
    const name = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (name.value.trim() === "") {
      nameError.style.display = "block";
      valid = false;
    } else {
      nameError.style.display = "none";
    }

    // Email Validation
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value.trim())) {
      emailError.style.display = "block";
      valid = false;
    } else {
      emailError.style.display = "none";
    }

    // Message Validation
    const message = document.getElementById("message");
    const messageError = document.getElementById("messageError");
    if (message.value.trim() === "") {
      messageError.style.display = "block";
      valid = false;
    } else {
      messageError.style.display = "none";
    }

    // If form is invalid, prevent submission
    if (!valid) {
      event.preventDefault();
    }
  });