// Code your orbitCircumference function here:

function orbitCircumference(radius = 2000){
  return Math.round(2*Math.PI*radius);
}

// Code your missionDuration function here:

function missionDuration(numOrbits, orbitRadius = 2000, orbitalSpeed = 28000){
  return Math.round(((numOrbits*orbitCircumference(orbitRadius))/orbitalSpeed)*100)/100;
}

console.log(`The mission will travel ${orbitCircumference()*5} km around the planet, and it will take ${missionDuration(5)} hours to complete.`);

// Copy/paste your selectRandomEntry function here:

function selectRandomEntry() {
  let selection = crew[Math.floor(Math.random()*crew.length)];
  return selection;
}

// Code your oxygenExpended function here:

function oxygenExpended(animal, orbitRadius = 2000, orbitalSpeed =28000){
  let spaceWalk = missionDuration(3, orbitRadius, orbitalSpeed);
  let oxygenUsed = Math.round(animal.o2Used(missionDuration(3))*1000)/1000;
  return console.log(`${animal.name} will perform the spacewalk, which will last ${spaceWalk} hours and require ${oxygenUsed} kg of oxygen.`)
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];

 oxygenExpended(selectRandomEntry());
 