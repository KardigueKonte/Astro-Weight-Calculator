// create my function
function calculateWeight() {
  const gravity = document.getElementById("planet").value;
  const weight = document.getElementById("earthWeight").value;
  const result = document.getElementById("result");

  if (weight === "" || weight <= 0) {
    result.style.opacity = 1;
    result.innerHTML = "Enter a valid weight!";
    return;
  }

  const yourWeight = (weight * gravity).toFixed(2);

  result.style.opacity = 1;
  result.innerHTML = `Your weight is ${yourWeight} Kilograms on this planet`;
}
