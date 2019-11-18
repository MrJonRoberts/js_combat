
var inv = {
	'name': 'Backpack',
	'max-size': 'L',  // s m l vl
	'max-weight': 10,
	'max-items': 3,
	'current-weight': 0,
	'items': [],
	'money': {}
	
}

var redPotion ={
	'name': "Red Potion",
	'desc': "This potion is bright red and looks dangerous, it will heal you",
	'weight': 5,
	'size': 'S',
	'cat': 'use', // 'equip'
	'buff': { 'hp': 50},
	'debuff': {'str': -1, 'timer': 3},
	'cost': { 'gold': 2, 'silver':1}
}
	
var money = {
	'gold': 10,
	'silver': 0
}


function addItemToInv(item){
	displayDebug("adding "+item.name);
	// inv 
	// if item size GT inv max size then no
	// if item weight + current inv weight GT inv max weight NO
	// if inv item count +1 > max items no
	if (inv.items.length + 1 > inv["max-items"]){
		// no
		var msg = item.name + " dose not fit in your inventory, take something out, you have too many items"
		console.log(msg);
		displayDebug(msg);
	} else if (item['weight'] + inv["current-weight"] > inv['max-weight'] ){
		var msg = item.name + " dose not fit in your "+ inv.name +", take something out, it is too heavy";
		console.log(msg);
		displayDebug(msg);
	} else{
		displayDebug("success");
		// put it into the inventory:
		inv.items.push(item);
		inv["current-weight"] += item.weight;
		
	}
	
}
function displayDebug(msg){
	var debugContent = document.getElementById("debug_console");
	debugContent.innerHTML += "<br/>" + msg
}
function displayMsg(msg){
	var msgContent = document.getElementById("content");
	msgContent.innerHTML += "<br/>" + msg
	
}

addButton = document.getElementById("add");
addButton.addEventListener('click', event =>{

	addItemToInv(redPotion);
	displayInv();
	
});


function displayInv(){
	var content = document.getElementById("content");
	
	var invHeader = inv.name + " current wt: " + inv["current-weight"];
	content.innerHTML = "";
	content.innerHTML += invHeader;
	for (var counter = 0; counter < inv.items.length; counter++){
		var item = inv.items[counter];
		var displayTxt = item.name 
		content.innerHTML += "<br/>"+ displayTxt;
	}
	

}



