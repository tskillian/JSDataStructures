
var HashTable = function(size) {
	this.backingArrayLength = size;
	this.backingArrayNumElements = 0;
	this.backingArray = [];
};

HashTable.prototype.hashFunc = function(data) {
	return Math.floor(data%this.backingArrayLength);
};

HashTable.prototype.insert = function (keyValue, value) {
	var key = this.hashFunc(keyValue);
	var tempObj = {};
	// Checking to see if there's something already at this location
	if (this.backingArray[key]) {
		//Checking to see if 
		if (this.backingArray[key].length) {
			tempObj[keyValue] = value;
			this.backingArray[key] = [];
			this.backingArray[key].push(tempObj);
		} else {
			tempObj[keyValue] = value;
			this.backingArray[key] = [this.backingArray[key]];
			this.backingArray[key].push(tempObj);
		}
	} else {
	tempObj[keyValue] = value;
	this.backingArray[key] = tempObj;
	this.backingArrayNumElements++;
	}
};

HashTable.prototype.has = function (search) {
	var hashResult = this.backingArray[this.hashFunc(search)];

	if (hashResult) {
		if (!(hashResult.length)) {
			if (Object.keys(hashResult) == search) {
				return true;
			}
		} else {
			// is an array because it has a length
			for (var i = 0; i < hashResult.length; i++) {
				if (Object.keys(hashResult[i]) == search) {
					return true;
				}
			}
		}
	}
	return false;
};

HashTable.prototype.percentFull = function() {
	return this.backingArrayNumElements/this.backingArrayLength*100 + '%';
};

var hashtable = new HashTable(10);
hashtable.insert(5, 'five');
hashtable.insert(10,'ten');
hashtable.insert(1, 'one');
hashtable.insert(20, 'twenty');

console.log(hashtable.backingArray);
console.log(hashtable.has(8));
console.log(hashtable.has(5));
console.log(hashtable.has(10));
console.log(hashtable.percentFull());
console.log(hashtable.has(20));