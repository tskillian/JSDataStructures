var DblLinkedList = function() {
	this.head = null;
	this.tail = null;
	this.length = 0;
};

var Node = function(data) {
	this.data = data;
	this.prev = null;
	this.next = null;
};

DblLinkedList.prototype.prepend = function(data) {
	var node = new Node(data);
	if (this.head === null) {
		this.head = node;
		this.tail = node;
	} else {
		node.next = this.head;
		this.head = node;
		this.head.next.prev = node; 
	}
	this.length++;

}

DblLinkedList.prototype.append = function(data) {
	var node = new Node(data);
	if (this.head === null) {
		this.head = node;
		this.tail = node;
	} else {
	node.prev = this.tail;
	this.tail.next = node;
	this.tail = node;
	}
	this.length++;
}


DblLinkedList.prototype.pop_front = function(callback) {
	var toReturn = this.head.data;
	this.head = this.head.next;
	this.head.prev = null;
	this.length--;
	callback(toReturn);
}

DblLinkedList.prototype.pop_back = function(callback) {
	var toReturn = this.tail.data;
	this.tail = this.tail.prev;
	this.tail.next = null;
	this.length--;
	callback(toReturn);
}

var ll = new DblLinkedList();

ll.prepend('world');
ll.prepend('hello');
//  console.log(ll.head);
//  ^^ Returns:
// { data: 'hello',
//  prev: null,
//  next: { data: 'world', prev: [Circular], next: null } }


ll.append('last');
//console.log(ll.head);
// ^^ Returns:
// { data: 'hello',
//  prev: null,
//  next: 
//   { data: 'world',
//   prev: [Circular],
//   next: { data: 'last', prev: [Circular], next: null } } }

// Creating a function to callback - I'm not sure if the code below is what was meant by the assignment
// but it is how I interpreted the question.

var print = function(data) {
	console.log(data);
}
 ll.pop_front(print);
// ^^ Returns:
// hello

ll.pop_back(print);
// ^^ Returns:
// last

console.log(ll.head);
// ^^ Returns:
// { data: 'world', prev: null, next: null }



