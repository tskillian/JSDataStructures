var Queue = function() {
	this.head = null;
};


Queue.prototype.enqueue = function(data) {
	if (this.head === null) {
		this.head = {data: data, next: null};
	} else {
		var temp = this.head;
		while (temp.next) {
			temp = temp.next;
		}
		temp.next = {data: data, next: null};
	}
};

Queue.prototype.dequeue = function(callback) {
	var toReturn = this.head.data;
	if (this.head === null) {
		var err = 1;
	} else {
		var err = 0;
		this.head = this.head.next;
		callback(err, toReturn);
	}
};


var q = new Queue();

q.enqueue('hello');
q.enqueue('world');
console.log(q.head);
// { data: 'hello', next: { data: 'world', next: null } }

var randoCallback = function(err, value) {
	if (err) {
		return 'There are no elements to dequeue';
	} else {
		console.log(value);
	}
};

q.dequeue(randoCallback);
// hello
console.log(q.head);
// { data: 'world', next: null }
