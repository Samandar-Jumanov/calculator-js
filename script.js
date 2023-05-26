function insertValue(value) {
    document.getElementById("result").value += value;
  }


function clearResult() {
    document.getElementById("result").value = "";
}

function backspace() {
    const result = document.getElementById("result").value;
    document.getElementById("result").value = result.substring(0, result.length - 1);
  }

  function calculate() {
    const result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
}

