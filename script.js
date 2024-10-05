document.getElementById('check').addEventListener('click', checkNumber);

function checkNumber() {
  let number = parseFloat(document.getElementById('number').value);

  if (isNaN(number)) {
    document.getElementById('result').innerHTML = 'Invalid input!';
  } else if (number < 0) {
    document.getElementById('result').innerHTML = 'The number is negative.';
  } else {
    document.getElementById('result').innerHTML = 'The number is not negative.';
  }
}
