var currentNumber = 0;

document.getElementById("btnSubt").addEventListener("click", subtracao);
function subtracao() {
  currentNumber = currentNumber - 1;
  document.getElementById("currentNumber").innerHTML = currentNumber;
}


document.getElementById("btnSoma").addEventListener("click", adicao);
function adicao() {
  currentNumber = currentNumber + 1;
  document.getElementById("currentNumber").innerHTML = currentNumber;
}

