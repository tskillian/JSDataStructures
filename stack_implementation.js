var Stack = function() {
	this.tail = null;
	this.numItems = 0;
};

Stack.prototype.push = function(data) {
	if (this.tail === null) {
		this.tail = {prev: null, data: data}
	} else {
		this.tail = {prev: this.tail, data: data}
	}
};

Stack.prototype.pop = function(callback) {
	if (this.tail === null) {
		var err = 1;
	} else {
		var err = null;
		var toReturn = this.tail.data;
		this.tail = this.tail.prev;
	}
	callback(err, toReturn);
};

var s = new Stack();
s.push('hello');
s.push('world');
// console.log(s.tail);
// Returns { prev: { prev: null, data: 'hello' }, data: 'world' }


//Devine arbitrary function to callback
var callback = function(err, value) {
	if (err) {
		console.log("Underflow");
	} else {
		console.log(value);
	}
};

s.pop(callback);
// returns 'world'
console.log(s.tail);
// returns { prev: null, data: 'hello' }

