// Crop suggestion based on temperature and season
function suggestCrop() {
  const temperature = document.getElementById("temperature").value;
  const season = document.getElementById("season").value;
  let suggestedCrop = "";

  if (!temperature || !season) {
      document.getElementById("suggestedCrop").value = "Please enter all inputs to get a suggestion.";
      return;
  }

  if (season === "summer") {
      if (temperature > 30) {
          suggestedCrop = "Watermelon, Mango, or Cotton";
      } else {
          suggestedCrop = "Tomato, Chili, or Corn";
      }
  } else if (season === "winter") {
      if (temperature < 15) {
          suggestedCrop = "Wheat, Barley, or Spinach";
      } else {
          suggestedCrop = "Cauliflower, Cabbage, or Mustard";
      }
  } else if (season === "monsoon") {
      suggestedCrop = "Rice, Paddy, or Soybean";
  }

  document.getElementById("suggestedCrop").value = suggestedCrop;
}

// Form validation and handling the submit event
document.getElementById("agricultureForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const feedback = document.getElementById("feedback").value.trim();

  // Validate required fields
  if (!name || !email || !feedback) {
      document.getElementById("errorMessage").innerText = "Please fill in all fields.";
      return;
  }

  // Validate email format
  if (!/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById("errorMessage").innerText = "Please enter a valid email address.";
      return;
  }

  // If all validation passes
  document.getElementById("errorMessage").innerText = ""; // Clear error message
  document.getElementById("feedbackMessage").innerText = `Thank you for your feedback, ${name}! We will contact you at ${email} soon.`;

  // Reset the form
  document.getElementById("agricultureForm").reset();
});
