var button = document.getElementById('x');
var counter = 0
message = document.getElementById("message")
button.onclick = function exit() {
  counter++;
  console.log(counter);
  if (counter >="3") {
    message.innerHTML = "haha sorry lol";
  }
}
