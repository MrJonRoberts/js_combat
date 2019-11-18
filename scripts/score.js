// JavaScript Document

// begin game:

var score = 0;
var lives = 13;
var p1Health = 10;		
var eHealth = 100;
var hitChance = 80;
var weaponBonus = 5;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


var attackBtnElt = document.getElementById("attackBtn");
attackBtnElt.addEventListener('click', function(){
	var hitChanceCalc = hitChance + weaponBonus + getRandomInt(10);
															   
	console.log(hitChanceCalc)
	if (hitChanceCalc >= 85) {
		// hit
		damage = getRandomInt(5);
		eHealth = eHealth - damage
		console.log(damage);
	}
	displayGameData()
	
	
	
	
});

function displayGameData(){
	
	scoreElt = document.getElementById("score");
	scoreElt.innerHTML = "Score: " + score;
	
	livesElt = document.getElementById("lives");
	livesElt.innerHTML = "Lives: " + lives;

	p1HealthElt = document.getElementById("pHealth");
	p1HealthElt.innerHTML = "Health: " + p1Health;
	
	eHealthElt = document.getElementById("eHealth");
	eHealthElt.innerHTML = "Health: " + eHealth;
}

displayGameData();