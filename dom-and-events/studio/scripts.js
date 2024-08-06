// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {

    // document.getElementById("rocket") = parseInt(this.document.getElementById('rocket').style.bottom);

    let launch = this.document.getElementById("takeoff");
    launch.addEventListener("click", function() {
        let ready = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(ready === true){
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = 'blue';
            document.getElementById("spaceShuttleHeight").innerHTML = 10000;
            document.getElementById("rocket").style.bottom = parseInt(document.getElementById("rocket").style.bottom) + 150 + 'px';
        }
    });

    let land = this.document.getElementById("landing");
    land.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = 'green';
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
        document.getElementById("rocket").style.bottom = 0;
    });

    let abort = this.document.getElementById("missionAbort");
    abort.addEventListener("click", function() {
        let confirmAbort = window.confirm("Confirm that you want to abort the mission.");
        if(confirmAbort === true){
            document.getElementById("flightStatus").innerHTML = "Mission Aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = 'green';
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
            document.getElementById("rocket").style.bottom = 0;
        }
    });

    this.document.getElementById("up").addEventListener("click", function() {
        document.getElementById("spaceShuttleHeight").innerText = parseInt(document.getElementById("spaceShuttleHeight").innerText) + 10000;
        document.getElementById("rocket").style.bottom = parseInt(document.getElementById("rocket").style.bottom) + 10 + 'px';
    });

    this.document.getElementById("down").addEventListener("click", function() {
        document.getElementById("spaceShuttleHeight").innerText = parseInt(document.getElementById("spaceShuttleHeight").innerText) - 10000;
        document.getElementById("rocket").style.bottom = parseInt(document.getElementById("rocket").style.bottom) - 10 + 'px';
    });

    this.document.getElementById("left").addEventListener("click", function() {
        document.getElementById("rocket").style.left = parseInt(document.getElementById("rocket").style.left) - 10 + 'px';
    });

    this.document.getElementById("right").addEventListener("click", function() {
        document.getElementById("rocket").style.left = parseInt(document.getElementById("rocket").style.left) + 10 + 'px';
    });
    
});