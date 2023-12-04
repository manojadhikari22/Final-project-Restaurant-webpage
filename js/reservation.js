// Code for Registration form
let loginForm = document.querySelector('.reservation-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
    //console.log(e);
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let date = document.getElementById('date').value;
  let time = document.getElementById('time').value;
  let guests = document.getElementById('guests').value;
  let requests = document.getElementById('requests').value;

  // Check if any field is empty
const inputs = [name, email, phone, date, time, guests, requests];
let isValid = true;

for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i] || !inputs[i].trim()) {
        isValid = false;
        break; // Exit the loop early if an empty input is found
    }
}

if (!isValid) {
    let errorMsg = document.querySelector('.errorMsg');
    errorMsg.textContent = 'Please add all input values*';
    errorMsg.style.display = "block"
    // Hide error message after 5 seconds
    setTimeout(() => {
      errorMsg.textContent = '';
  }, 5000);
    return;
} else {
    let successMsg = document.querySelector(".successMsg");
    successMsg.textContent = "Form submitted successfully";
    successMsg.style.display = "block";
    loginForm.reset(); // Clear the form fields
    
    let showsData = document.querySelector(".datas");
    showsData.innerHTML = `
      Name: <strong>${name}</strong><br>
      Email: <strong>${email}</strong><br>
      Phone: <strong>${phone}</strong><br>
      Date: <strong>${date}</strong><br>
      Time: <strong>${time}</strong><br>
      Guests: <strong>${guests}</strong><br>
      Requests: <strong>${requests}</strong><br>
    `;
    showsData.style.display = "block";
  }
});


// this is for responsive menu
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".navlist-mobile").classList.toggle("show");
    console.log("click");
  });
});
