var names = [
	{name: "Aim Hoskins", id: 1}, 
	{name: "Guil Hernandez", id: 2},
	{name: "Ben Jakuben", id: 3}
];

names.sort();
console.log(names);

names.sort(function(a,b) {
	if (a.name < b.name) {
		return -1;
	} else if (a.name > b.name) {
		return 1;
	} else {
		return 0;
	}
});

console.log(names);

