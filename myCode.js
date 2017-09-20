var start = document.getElementById('start'),
stop = document.getElementById('stop');


function startActivity() {
   console.log("Start Clicked");
window.location.href = "activity.html";
}

start.onclick = startActivity;