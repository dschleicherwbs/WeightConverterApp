let firstValue = true;

document.querySelector("#lbsInput").addEventListener("input", e => {
  const input = e.target.value;
  const grammField = document.querySelector("#gramsOutput");
  const kgField = document.querySelector("#kgOutput");
  const ozField = document.querySelector("#ozOutput");

  grammField.innerHTML = input / 0.0022046;
  kgField.innerHTML = input / 2.2046;
  ozField.innerHTML = input / 16;

  if (firstValue) {
    firstValue = false;
    document.querySelector("#output").style.visibility = "visible";
  }
});
