//util.inherits
/*
var util = require('util');
function Base(){
	this.name = 'base';
	this.base = 1991;
	this.sayHello = function(){
		console.log('Hello' + this.name);
	};
}
Base.prototype.showName = function(){
	console.log(this.name);
};

function Sub(){
	this.name = 'sub';
}

util.inherits(Sub, Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
//objSub.sayHello(); //sayHello函数未被继承
console.log(objSub);
*/

//util.inspect
/*
var util = require('util');

function Person(){
	this.name = 'byvoid';
	this.toString = function(){
		return this.name;
	};
}

var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true, null, true));
*/

//util.isArray(object)
/*
var util = require('util');

console.log(util.isArray([]));
console.log(util.isArray(new Array()));
console.log(util.isArray({}));
*/

//util.isRegExp(object)
/*
var util = require('util');

console.log(util.isRegExp(/some regexp/)); //true
console.log(util.isRegExp(new RegExp('another regexp'))); //true
console.log(util.isRegExp({})); //false
*/

//util.isDate(object)
/*
var util = require('util');

console.log(util.isDate(new Date())); //ture
console.log(util.isDate(Date())); //false
console.log(Date());
console.log(util.isDate({})); //false
*/

//util.isError(object)

var util = require('util');

console.log(util.isError(new Error())); //true
console.log(util.isError(new TypeError())); //true
console.log(util.isError({name: 'Error', message: 'an error occurred'})); //false

