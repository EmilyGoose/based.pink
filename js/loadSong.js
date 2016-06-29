function loadSong(){

    var player=document.getElementById('player');
    var source1=document.getElementById('source1');
    var source2=document.getElementById('source2');

    source1.src='/audio/mac+.mp3';
    source2.src='/audio/mac-slowed.mp3';

   player.load(); //just start buffering (preload)
   player.play(); //start playing
}
