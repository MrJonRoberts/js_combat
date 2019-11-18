// JavaScript Document

/*

	set score to 0
	set lives to 3
	set health to 100
	set eHealth to 100
	
	each round:
		for player
			check if we hit 
				display hit info
				if we hit do damage
					display damage info
			if enemyHealth is less than 0
				game over we win
		for enemy
			check if enemy hits
				display hit info
				if ehits do damage
					display damage info
			if health is less than 0
				take one of lives
				display lives info
				if lives is 0
					game over we die!
		
		output results of combat			
		if game over:
			display game over info
			end game
			
	
		next round
*/

function gameSetup(){
	/*
	set score to 0
	set lives to 3
	set health to 100
	set eHealth to 100
	*/
	score = 0;
	pHealth = 100;
	eHealth = 100;
	lives = 3;
	
	// set some stats (made up - will balance later)
	pAtt = 3;
	pDef = 15;
	
	eAtt = 1;
	eDef = 10;
	
	pWeap = 10;
	eWeap = 7;
	
	gameOver = false;
	roundNumber = 1;
	
	winStatus = "";
}

function doCombatRound(){
	/*
	for player
			check if we hit 
				display hit info
				if we hit do damage
					display damage info
			if ehealth is less than 0
				game over we win
		for enemy
			check if enemy hits
				display hit info
				if ehits do damage
					display damage info
			if health is less than 0
				take one of lives
				display lives info
				if lives is 0
					game over we die!
	
	*/
	displayInfo("Starting Round: " + roundNumber )
	
	if ( checkIfHit(pAtt, eDef) ){
		// player hits
		displayInfo("Player Hits");
		var damage = calcDamage(pWeap, pAtt);
		eHealth = eHealth - damage
		displayInfo("You did "+ damage + " damage!");
		displayInfo("Your enemy has "+ eHealth + " health left")
	} else {
		// player misses
		displayInfo("Player Misses");
	}
	
	if ( checkIfHit(eAtt, pDef)){
		// enemy hits
		displayInfo("Enemy Hits");
		var damage = calcDamage(eWeap, eAtt);
		pHealth = pHealth - damage
		displayInfo("Ouch, you got hit for "+ damage + " points!")
		displayInfo("You have "+ pHealth + " health left")
		
	} else {
		// enemy misses
		displayInfo("Enemy Misses");
	}
	
	endOfRound();
	roundNumber ++;
}

function endOfRound(){
	
	// check if player health is > 0
		// if p health <= 0
			// take 1 of lives
			// if lives = 0
				// game over - player lost
			// else 
			// next round
	// check if e health is < 0
	// game over player wins.
	
	if (pHealth > 0){
		// round continues
		
	} else {
		// player RIP.
		lives --;  // lives = lives -1
		if (lives <= 0){
			gameOver = true
			/// create winStatus in startup
			winStatus = "Player is DEAD RIP. So Sad, Too Bad!"
		}
	}
	if (eHealth <= 0){
		gameOver = true
		winStatus = "Player Wins. Gratz, welldone."
	}
	
	
	
}


function calcDamage(weapDamage,bonus){
	var randomDiceRoll = getRandomInt(weapDamage);
	var damage = randomDiceRoll + bonus;
	return damage;
}



function checkIfHit(attkStr, defStr){
	/*
		check if attk is greather than def
	*/
	
	randomDiceRoll = getRandomInt(20);
	
	if ( (attkStr + randomDiceRoll) > defStr){
		return true;
	} else {
		return false;
	} 
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function displayInfo(info){
	
	console.log(info);
	var gameElt = document.getElementById("game");
	var gameInfo = gameElt.innerHTML;
	
	gameElt.innerHTML = gameInfo + "<br/>" + info;
}



function gameOn(){
	var numberOfRounds = 5;
	
	gameSetup();
	

	while (gameOver  == false){
		doCombatRound();
	}
	displayInfo(winStatus);
	displayInfo("You survived "+roundNumber);
}

// run the game
gameOn()














