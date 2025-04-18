
  document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    let isValid = true;

    // Get form elements
    const name = document.getElementById("fb-name");
    const email = document.getElementById("fb-email");
    const rating = document.getElementById("fb-rating");
    const comments = document.getElementById("fb-comments");

    // Get error message elements
    const nameError = document.getElementById("fbNameError");
    const emailError = document.getElementById("fbEmailError");
    const ratingError = document.getElementById("fbRatingError");
    const commentsError = document.getElementById("fbCommentsError");

    // Reset errors
    nameError.style.display = "none";
    emailError.style.display = "none";
    ratingError.style.display = "none";
    commentsError.style.display = "none";

    // Full Name validation
    if (name.value.trim() === "") {
      nameError.style.display = "block";
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      emailError.style.display = "block";
      isValid = false;
    }

    // Rating validation
    const ratingValue = parseInt(rating.value.trim(), 10);
    if (isNaN(ratingValue) || ratingValue < 1 || ratingValue > 5) {
      ratingError.style.display = "block";
      isValid = false;
    }

    // Comments validation
    if (comments.value.trim() === "") {
      commentsError.style.display = "block";
      isValid = false;
    }

    // Prevent form submission if any validation fails
    if (!isValid) {
      event.preventDefault();
    }
  });

