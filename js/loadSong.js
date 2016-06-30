var player = document.getElementById('player');
var source1 = document.getElementById('source1');
var source2 = document.getElementById('source2');

player.onclick = function() {
	var i = 1
	while (true) {
		if (i%2 == 0) {
	    nextTrack = "2";
	    source1.play();
	    source2.pause();
	    source2.currentTime = 0;
			i++;
	  } else {
	    nextTrack = "1";
	    source2.play();
	    source1.pause();
	    source1.currentTime = 0;
			i++;
	  }
	}
}
