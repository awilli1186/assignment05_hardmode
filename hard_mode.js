var pushButton = function(buttonValue) {
  if (buttonValue == 'c') {
    document.getElementById('display').value = " ";
  } else {
    document.getElementById('display').value += buttonValue;
  }
};

var calculate = function(equation) {
  var answer =eval(equation);
  document.getElementById('display').value = answer;
};
