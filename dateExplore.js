// var startTime = Date.parse('2017-07-30T00:00:00-04:00');
// console.log('starttime EST = ' + startTime);

// var endTime = Date.parse('2017-08-05T23:59:59-04:00');
// console.log('WRK starttime PST = ' + endTime);

var startTime = Date.parse('2017-07-26T07:00:00-04:00');
console.log('starttime EST = ' + startTime);

var endTime = Date.parse('2017-08-02T00:00:00-04:00');
console.log('WRK starttime PST = ' + endTime);

var nowTime = Date.parse(new Date());
console.log('EXP starttime PST = ' + nowTime);

if (nowTime >= startTime && nowTime <= endTime) {
	var timeLeft = endTime - nowTime;
    var timeRemain = (timeLeft/(1000*3600)/24);
	console.log('timer started.  Remaing time is = ' + timeRemain);
} else {
	console.log('not in the required time yet');
}

var result = endTime - startTime;
var outvar = (result/(1000*3600)/24);
console.log('initial results = ' + result + ' calculated results in hours = ' + outvar);

//var nowtime = Date.parse(new Date());
//console.log('nowtime time = ' + nowtime );

//new Date(year, month, date, hours, minutes, seconds)
// var now = new Date(2017,6,30,00,00,01);
// console.log('this moment (no string) PST time= ' + now);

// var nowString = JSON.stringify(now);
// console.log('stringified value PST time = ' + nowString);

// var starttime = Date.parse('2017-07-30T00:00:01-04:00');
// console.log('starttime EST offset version = ' + starttime);

// var converttime = Date(starttime);
// console.log('Date converted back version = ' + converttime)
//
//var deadline = new Date(Date.parse(new Date()) + 7 * 24 * 60 * 60 * 1000);
