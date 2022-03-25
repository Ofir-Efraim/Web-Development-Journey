let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });
let nextSequence = () => {

    level++;
    $("#level-title").text("Level " + level);
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
    $(`div #${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}



$('div .btn').click(function(event){
    let userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

function playSound(name){
    let audio = new Audio(`/sounds/${name}.mp3`);
    audio.play();
}

function animatePress(currentColor){
    $(`div #${currentColor}`).toggleClass("pressed");
    setTimeout( () => { $(`div #${currentColor}`).toggleClass("pressed");},100);
}
function checkAnswer(currentLevel) {
    if(userClickedPattern [currentLevel] === gamePattern [currentLevel]){
        if(userClickedPattern.length == gamePattern.length){
            userClickedPattern = [];
            setTimeout( () => {nextSequence()}, 1000);
        }
    }
    else{
        let gameover = new Audio("/sounds/wrong.mp3");
        gameover.play();
        $(`body`).toggleClass("game-over");
        setTimeout( () => { $('body').toggleClass("game-over");},200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
    userClickedPattern = [];
}