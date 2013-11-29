var MinHeap = function() {
	this.heap = [];
};

MinHeap.prototype.insert = function(data) {
	if (this.heap.length === 0) {
		this.heap[1] = data;
	} else {
		this.heap.push(data);
		newIndex = this.heap.indexOf(data);
		while (data < this.heap[Math.floor(newIndex/2)]) {
			this.heap[newIndex] = this.heap[Math.floor(newIndex/2)];
			this.heap[Math.floor(newIndex/2)] = data;
			newIndex = this.heap.indexOf(data);
		}

	}

};

MinHeap.prototype.peak = function() {
	return this.heap[1];
};

var minHeap = new MinHeap();
minHeap.insert(9);
minHeap.insert(12);
minHeap.insert(11);
minHeap.insert(2);
minHeap.insert(5);
minHeap.insert(8);
minHeap.insert(10);

console.log(minHeap.heap);
console.log(minHeap.peak());