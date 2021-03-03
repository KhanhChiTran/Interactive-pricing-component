const slider = document.getElementById("myRange");
const priceOutput = document.getElementById("amount");
const viewOutput = document.querySelector(".pageviews");
// slider.oninput = function () {
//   // priceOutput.innerHTML = this.value;
//   console.log(this.value);
// };

slider.addEventListener("mousemove", function (e) {
  // console.log(e.target.value);
  let x = e.target.value;
  const color = `linear-gradient(
    90deg,
    hsl(174, 86%, 45%) ${x}%,
    hsl(224, 65%, 95%) ${x}%
  )`;

  slider.style.background = color;
  if (x < 10) {
    viewOutput.innerText = "10K PAGEVIEWS";
    return (priceOutput.innerText = "$8.00");
  }
  if (x <= 25) {
    viewOutput.innerText = "50K PAGEVIEWS";
    return (priceOutput.innerText = "$12.00");
  }
  if (x <= 60) {
    viewOutput.innerText = "100K PAGEVIEWS";
    return (priceOutput.innerText = "$16.00");
  }
  if (x < 95) {
    viewOutput.innerText = "500K PAGEVIEWS";
    return (priceOutput.innerText = "$24.00");
  }
  if (x <= 100) {
    viewOutput.innerText = "1M PAGEVIEWS";
    return (priceOutput.innerText = "$36.00");
  }
});
