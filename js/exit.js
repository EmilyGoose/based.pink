var button = document.getElementById('x');
var counter = 0
message = document.getElementById("message")
button.onclick = function exit() {
  counter++;
  console.log(counter);
  if (counter == 3) {
    message.innerHTML = "haha sorry lol";
  }
	if (counter == 10) {
		message.innerHTML = "why are you still clicking lol";
	}
	if (counter == 15) {
		message.innerHTML = "Dude stop trying chill out";
	}
}
