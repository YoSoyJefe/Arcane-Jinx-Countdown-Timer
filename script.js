// Set the target date
const targetDate = new Date("2025-12-31T23:59:59").getTime();

// Update the timer every second
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the results
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // If the countdown is over, display a message
  if (timeLeft < 0) {
    clearInterval(countdown);
    document.getElementById("timer").innerHTML = "Countdown Completed!";
  }
}, 1000);

// Handle image upload
const imageUpload = document.getElementById("image-upload");
const uploadedImage = document.getElementById("uploaded-image");

imageUpload.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      uploadedImage.src = e.target.result;
      uploadedImage.style.display = "block";
    };

    reader.readAsDataURL(file);
  }
});
