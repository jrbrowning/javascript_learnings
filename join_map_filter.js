// Join experimentation
var sassArray = [1,2,3,4,5];
console.log("before", sassArray);
var newArray = sassArray.join('-');
console.log("after", newArray);


var myName = "jeff";
function convertName (name) {
	myName = name;
	console.log ("inside function", myName);
	var tempVariable = "TEMP";
	return tempVariable;
}
var temp = convertName("Browning");
console.log("outside function", myName);
console.log("temp variable generated inside the function", temp);


// join(seperator) --> will join all elements of an array into a string with an optional seperator.   
// If "", then no space between (merge into one long string)
// if () --blank--, then the separator will be a comma ("," effectively).   
var str_to_split = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
var myArray = str_to_split.split(",");
var output = myArray.join("")
console.log("this is the output array from join",output);


// concatenation experiement.  NOTE, this is supposed to be faster in Javascript
var output2 = "";
for (var i=0; i < myArray.length; i++) {
	output2 += myArray[i];
}
console.log("this is the output array from concatenation",output2);

// Map experimentation
// 
   
let originalArray = [1,2,3,4,5];

function multiplyBy(item,mult) {
	return item * mult;
}

function toUpperCase(str) {
	return str.toUpperCase();
}

function multiplyByAny(arr,mult) {
	var newArr =[];

	for (var i=0; i < arr.length ; i++) {
		newArr[i] = multiplyBy(arr[i],mult);
	}
	return newArr;
}

var timesThree = multiplyByAny(originalArray,3);
console.log("array multiplied by a number", timesThree);

var upperString = toUpperCase(output2);
console.log("output of to upper case string replace",upperString);
console.log("output straight from in method on string",output2.toUpperCase());

// How does the map function compare to the actual native Array.map? The usage is slightly different. 
// Firstly, we don’t need to pass in an array as the first argument. Instead, the array used is the one to the left of the dot.
// arr.map();
// The function also enables alternate inputs to be used.  index and the original array (if needed)
// 

// Remember, this function will be acting upon the array to the left of the .   So "item" is each array element
function numberedList(item, index) {
	return (index + 1) + "- " + item;   
}

// collapsed the function inline and making anonymous
var textArray = ["jeff","browning","learning","stuff"];
var result = textArray.map(function (item, index) {
	return (index + 1) + "- " + item;   
});
console.log(result);

// Filter experiments
// write a function that will only allow values >10 in the output array.
// Use timesThree array
// 
function isGreaterThan(item) {
	return item > 10;
}

function FilterArray (arr, isGreaterThan2) {
	filteredArr = [];

	for (var i=0; i < arr.length; i++) {
//		if (arr[i] <= 10) {
//		Replacing this line with a function
//		
	if(isGreaterThan2(arr[i])) {
			filteredArr.push(arr[i]);
		}
	}
	return filteredArr;
}

var outputFiltered = FilterArray(timesThree, isGreaterThan);
console.log("this should be only < 10 arrays", outputFiltered);

var newFiltered = timesThree.filter(isGreaterThan);
console.log("final output should be same as above!",newFiltered);
//NOTE:  in the above, I originally had an input for the number to filter by
//The problem is, array.filter acts on the array to the left of the .
//So in this case, it is looping and pulling each item from the array.
//It will assign the item, index, and original array as expected inputs to the filter 
//function.   So how do you pass an additional parameter to the filter function?
//The thinking is...you don't!   Do it elsewhere.   You are trying to create a new function
//that is beyond what the filter function is currently written to do.  


