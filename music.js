let myMusic = new Audio("song.mp3");
function music() {
    myMusic.loop =! 0;
    return myMusic.paused?myMusic.play():myMusic.pause()
};
