/*
function funcName (param) {
	return param + 2;
}

console.log("value is the output from a normal function: " + funcName (2));

var funcArrow = (param2) => param2 + 3; 

console.log("value from the arrow function " + funcArrow((2)));
*/

var double = num => num *2; 

console.log("this is the double arrow " + double(2));

function CountEm() {
	this.num = 0;

	this.timer = setInterval( function add() {
		this.num++;
		console.log(this.num)}, 1000); 
}


var b = new CountEm();
clearInterval(b.timer);