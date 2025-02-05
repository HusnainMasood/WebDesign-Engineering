const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var run; 
var start = null; 
var text_tst = 'the quick brown fox jumped over the lazy dog'
var user = '';
var errors = 0;
var scores;

const NO_HIGH_SCORES = 3;
const HIGH_SCORES = 'highScores';
const highscore_string = localStorage.getItem(HIGH_SCORES);
const highScores = JSON.parse(highscore_string) ?? [];

// Add leading zero to numbers 9 or below (purely for aesthetics):
function formatNumber(num) 
{
    return ("0"+num)
}

// Run a standard minute/second/hundredths timer:
function timeAdjust() 
{
    var curr_tm = new Date(); 
    var timeDiff = curr_tm.getTime() - start.getTime();

    timeDiff = timeDiff/1000; 
    
    if (timeDiff / 60 > 1) 
    { 
        var min = Math.floor(timeDiff / 60);
        var sec = timeDiff - (min * 60);
        
        document.querySelector('div.timer').innerHTML = 
            ((min < 10)? formatNumber(min) : min) + ":" + ((sec < 10)? formatNumber(sec.toFixed(3)) : sec.toFixed(3));
    }
    else 
    {
        document.querySelector('div.timer').innerHTML = "00:" + ((timeDiff < 10)? formatNumber(timeDiff.toFixed(3)) : timeDiff.toFixed(3));
    }
}

// Start the timer:
function timeBegin() 
{
    start = new Date();
    run = window.setInterval(timeAdjust, 1);
}

// Match the text entered with the provided text on the page:
function matchingText() 
{
    
    if (start == null) 
    {
        timeBegin();
        console.log("start timer running");
    }

    user = document.getElementById('test-area').value;
    
    if (user.charAt(user.length-1) !== text_tst.charAt(user.length-1)) 
    {
        document.querySelector('.test-wrapper textarea').setAttribute('style', 'background-color: #ff000099');
        errors++;
    }
    else 
    {
        document.querySelector('.test-wrapper textarea').setAttribute('style', 'background-color: #ffffff');
    }

  
    if (user == text_tst) 
    {
        clearInterval(run);
        document.querySelector('.test-wrapper textarea').setAttribute('style', 'background-color: lightgreen'); 
        document.getElementById('type-complete').innerHTML = 'Test completed! You\'ve made ' + errors + ' error(s)';
    }
}

// Show top three times
function fastestTimes()
{
  const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
  const highscore_list = document.getElementById(HIGH_SCORES);
  
  highscore_list.innerHTML = highScores.map((scores) => `<li>${scores.scores}`).join('');
}

function highscoreSave()
{
  scores = timeAdjust();
  const score_new = {scores};
  
  // Adding to list
  highScores.push(score_new);
  
  // Sorting the list
  highScores.sort((a, b) => b.scores - a.scores);
  
  console.log(highScores.sort((a, b) => b.scores - a.scores));
  console.log(highScores.sort((a, b) => b.scores - a.scores));
  
  // Choose new list
  highScores.splice(NO_HIGH_SCORES);
  
  // Save to local storage
  localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores));
  
}

// Event listeners for keyboard input and the reset button: 
function resetAll() 
{
    console.log(timeAdjust());
    highscoreSave();
    fastestTimes();
    timeAdjust();
    console.log('reset all!');
    clearInterval(run); 
    start = null; 

    document.getElementById('test-area').value = ''; 
    document.querySelector('.test-wrapper textarea').setAttribute('style', 'background-color: white'); 
    document.querySelector('div.timer').innerHTML = "00:00.000" 
}











