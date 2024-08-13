//TODO: Add Your Code Below
window.addEventListener("load", function(){
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
            console.log(json);

            json.sort((a,b) => a.hoursInSpace - b.hoursInSpace);
            for (let i = 0; i < json.length; i++){
                document.getElementById("container").innerHTML +=  `
                <div class="astronaut">
                <div class="bio">
                <h3>${json[i].firstName + " " + json[i].lastName}</h3>
                <ul>
                <li>Hours in space: ${json[i].hoursInSpace}</li>
                <li>Active: ${json[i].active}</li>
                <li>Skills: ${json[i].skills.join(", ")}</li>
                </ul>
                </div>
                <img class="avatar" src="${json[i].picture}">
                </div>
             `
            //  if(json[i].active){
            //     document.getElementById("active").style.color = "green";
            //  }
            }
        });
    });
});