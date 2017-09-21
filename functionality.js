var startTime = null
, stopTime = null
, started = null
, personalBest = null;

function start() {
    startTime = new Date();
    started = setInterval(runClock, 10);	
}


function reset() {
    clearInterval(started);
    startTime = null;
    stopTime = null;
    document.getElementById("display-area").innerHTML = "00:00.000";
}

function runClock(){
    var currentTime = new Date()
    , timeElapsed = new Date(currentTime - startTime)
    , min = timeElapsed.getUTCMinutes()
    , sec = timeElapsed.getUTCSeconds()
    , ms = timeElapsed.getUTCMilliseconds();

    document.getElementById("display-area").innerHTML = 
    (min > 9 ? min : "0" + min) + ":" + 
    (sec > 9 ? sec : "0" + sec) + "." + 
    (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
};