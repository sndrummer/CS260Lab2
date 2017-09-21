/*GAME 
Timer
Scores
*/

var startTime = null
, started = null
, running = false
, timeElapsed = null
, personalBest = null
, curTimerValue = 0
, scores = [];

function start() {
    if (running == false) {
        startTime = new Date();
        started = setInterval(runClock, 10);
        running = true;
        document.getElementById("personal-best").innerHTML = "00:00.000";
    }
   	
}

function reset() {
    if (running == true) {
        if (scores.length <= 9) {
            
            //times.push(getTimeElapsed());
            console.log("You made it this far!!!!");
            var score = new Score(getTimeElapsed());
            scores.push(score);
            console.log(scores.length);
            console.log("min " + score.min);
            console.log("sec " + score.sec);
            console.log("ms " + score.ms);
            
           // scores.push(curTimerValue);
            var id = "personal-best";
            if (scores.length == 10) {
                console.log(scores.length);
                  console.log("you are here...");
                var avg = averageAllScores();
               // alert("Your average was " + avg);
               clearInterval(started);
               //console.log("Times: " + times.toString());
           
               startTime = null;
               document.getElementById("display-area").innerHTML = "00:00.000";
               running = false;
                startTime = null
                , started = null
                , timeElapsed = null
                , personalBest = null
                , curTimerValue = 0
                , scores = [];
              }
              else{
                displayTime(id, getTimeElapsed());
                // checkPersonalBest();
                 curTimerValue = 0;
                 clearInterval(started);
                 //console.log("Times: " + times.toString());
             
                 startTime = null;
                 document.getElementById("display-area").innerHTML = "00:00.000";
                 running = false;
              }
           
        }
      
    }
}

function runClock(id){
   // displayTime(id);
    var id = "display-area";
    displayTime(id, getTimeElapsed());
}

function getTimeElapsed()
{
    var timePast;
    var currentTime = new Date(),
    timeElapsed = new Date(currentTime - startTime);
    return timeElapsed
}

function displayTime(id, time)
{
    var timeValue = time;
    //timeElapsed = new Date(currentTime - startTime);
   var min = timeValue.getUTCMinutes()
    , sec = timeValue.getUTCSeconds()
    , ms = timeValue.getUTCMilliseconds();
    console.log("This is the ID " + id);
    document.getElementById(id).innerHTML = 
    (min > 9 ? min : "0" + min) + ":" + 
    (sec > 9 ? sec : "0" + sec) + "." + 
    (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
}


function compareScores(score1, score2){
    if (score1.min < score2.min) {
        return -1;
    } 
    else if (score1.min > score2.min) {
        return 1; 
    }
    else if(score1.sec < score2.sec){
        return -1;
    }
    else if (score1.sec > score2.sec) {
        return 1;
    }
    else if(score1.ms < score2.ms){
        return -1;
    }
    else if (score1.ms > score2.ms) {
        return 1;
    }
    else return -1;
}

function averageAllScores()
{
    var scoreAvg = null
    , sumOfMin = 0
    , sumOfSec = 0
    , sumOfMs = 0;
    scores.forEach(function(element) {
    sumOfMin += element.min;   
    });
    scores.forEach(function(element) {
    sumOfSec += element.sec;   
     });
     scores.forEach(function(element) {
    sumOfMs += element.ms;   
     });
     console.log("This is the Length divisor = " + scores.length);
     console.log("Sum of ms = " + sumOfMs);
     var avgTime = printScore(Math.round(sumOfMin/scores.length), 
     Math.round(sumOfSec/scores.length),Math.round(sumOfMs/scores.length));
     alert("This is your average time to hit the target " + avgTime + "\n");
}

function printScore(min,sec,ms)
{
    var scoreString = 
    (min > 9 ? min : "0" + min) + ":" + 
    (sec > 9 ? sec : "0" + sec) + "." + 
    (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
    console.log("Here is the scoreScrting: " + scoreString + "\n");
    var feedback = "\n";
    if (min >= 1 || sec >= 10) {
        feedback = "Are you okay? Need to work on those reflexes";
    }
    else if(sec >= 2)
    {
        feedback += "Bad";
    }
    else if(sec > 1)
    {
        feedback += "Okay";
    }
    else if(sec > 700)
    {
        feedback += "Good";
    }
    else if(ms > 500)
    {
        feedback += "Great!!";
    }
    else if(ms > 450)
    {
        feedback += "Awesome!!";
    }
    else if(ms > 275)
    {
        feedback += "Master Sniper";
    }
    else if(ms <= 275)
    {
        feedback += "Instant Death -- Congratulations you have mastered the art of aim and speed";
    }
    scoreString += feedback;
    return scoreString;
}

function Score(time)
{
        var timeValue = time;
        this.min = timeValue.getUTCMinutes()
        , this.sec = timeValue.getUTCSeconds()
        , this.ms = timeValue.getUTCMilliseconds();
};
;