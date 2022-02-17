var count = 0;
function add() {
  count = count + 1;
  display();
}

function sub() {
  if (count == 0) {
    return false;
  } else {
    count = count - 1;
    display();
  }
}
function display() {
  document.getElementById("counter").innerHTML = count;
}
