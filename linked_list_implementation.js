var LinkedList = function() {
	this.head = null;
	this.numItems = 0;
};

LinkedList.prototype.pop_front = function(callback) {
	var toReturn = this.head.data;
	this.head.data = this.head.next.data;
	this.head.next = this.head.next.next;
	callback(toReturn);
}

LinkedList.prototype.insert = function(value) {
	if(this.head === null) {
		this.head = {data: value, next: null};
	} else {
		var temp = this.head;
		while(temp.next !== null) {
			temp = temp.next;
		}
		temp.next = {data: value, next: null};
	}
	this.numItems++;
};

LinkedList.prototype.remove = function(index) {
	if (this.numItems-1 < index) {
		return "Index out of range";
	}
	else if (index === 0) {
		this.head.data = this.head.next.data;
		this.head.next = this.head.next.next;
	} 

	else {
		var counter = 0;
		var temp = this.head;
		while (counter <= index) {
			if (counter === index) {
				temp.data = temp.next.data;
				temp.next = temp.next.next;
				counter++;
			}
			else {
				if (counter+1 === index) {
					temp.next = null;
					break;
				}
				temp = temp.next;
				counter++;

			}

		}

	}
};

LinkedList.prototype.print = function() {
	var temp = this.head;
	if (temp.next === null) {
		return temp.data;
	}
	else {
		toPrint = [];
		while (temp.next) {
			toPrint.push(temp.data);
			temp = temp.next;
			if (!temp.next) {
				toPrint.push(temp.data);
			}
		}
		return toPrint;
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TEST CODE
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
var ll = new LinkedList();

ll.insert("hello");
// {data: "hello", next: null}

ll.insert("class");
// {data: "hello", next: {data: "class", next: null}}
//ll.insert("test");

//ll.remove(1);
// {data: "hello", next: null}
//console.log(ll.head);



ll.insert("world");
// {data: "hello", next: {data: "world", next:  null}}
//console.log(ll.head);


//ll.print();
// "["hello", "world"]"
//console.log(ll.print());

var pop_callback = function(a) {
	console.log(a);
}
ll.pop_front(pop_callback);
//console.log(ll.head);



