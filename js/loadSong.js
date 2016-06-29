player.onclick = function() {
  curTrack = this.innerHTML.replace(/Switch the music to track # /, "");
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
  this.innerHTML = "Stop the Music!" + nextTrack;
}
