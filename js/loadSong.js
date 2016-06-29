function loadSong(){

    var player=document.getElementById('player');
    var source1=document.getElementById('player');
    var source2=document.getElementById('player');

    source1.src='/audio/mac+.mp3';
    source2.src='/audio/mac-slowed.mp3';

   player.load(); //just start buffering (preload)
   player.play(); //start playing
}
