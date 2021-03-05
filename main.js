const slider = document.getElementById("myRange");
const priceOutput = document.getElementById("amount");
const viewOutput = document.querySelector(".pageviews");

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

const discountMark = document.querySelector(".discount");
const checkbox = document.getElementById("switch");
checkbox.onclick = () => {
  if (checkbox.checked == true) {
    discountMark.style.background = "red";
    discountMark.style.color = "#fff";
    discountMark.innerText = "-35%";
  } else {
    discountMark.style.background = "hsl(15, 100%, 70%)";
    discountMark.style.color = "hsl(14, 92%, 95%)";
    discountMark.innerText = "-25%";
  }
};
