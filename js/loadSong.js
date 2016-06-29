var player = document.getElementById('player');
var source1 = document.getElementById('source1');
var source2 = document.getElementById('source2');

player.onclick = function() {
  curTrack = this.innerHTML.replace(/Stop the Music! /, "");
  if (curTrack == "1") {
    nextTrack = "2";
    source1.play();
    source2.pause();
    source2.currentTime = 0;
  } else {
    nextTrack = "1";
    source2.play();
    source1.pause();
    source1.currentTime = 0;
  }
  this.innerHTML = "Stop the Music!";
}
