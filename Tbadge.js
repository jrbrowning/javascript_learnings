
// // Code to access language stats on github page
// var allElements = document.querySelectorAll('span.count');
// var myElements = [];
// var myVal = [];

// for (var i = 0; i < allElements.length; i++) { 
//     if (allElements[i].innerHTML) {
//         myElements.push(allElements[i]);
//     }
// }

// for (var i=0; i <myElements.length; i++) {
// 	if (myElements[i].innerText) {
// 		myVal.push(myElements[i].innerText);
// 	}
// }
// console.log(myVal);


// Code to access language stats on github page
var allElements = document.querySelectorAll('span.count');
var myElements = [];
var myVal = [];

for (var i = 0; i < allElements.length; i++) { 
    if (allElements[i].innerHTML) {
        myElements.push(allElements[i]);
    }
}

for (var i=0; i <myElements.length; i++) {
	if (myElements[i].innerText) {
		myVal.push(myElements[i].innerText);
	}
}
console.log(myVal);


// Code to access language type on github page
var allLang = document.querySelectorAll('a.filter-item');
var myLang = [];

for (var i = 0; i < allElements.length; i++) { 
    if (allLang[i].innerHTML) {
        myLang.push(allLang[i]);
    }
}
console.log(myLang);



// Code to access language type on github page
var allLang = document.querySelectorAll('a.filter-item');
var myLang = [];

for (var i = 0; i < allElements.length; i++) { 
    if (allLang[i].innerHTML) {
        myLang.push(allLang[i]);
    }
}
console.log(myLang);

