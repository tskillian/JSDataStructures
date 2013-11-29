var BST = function() {
	this.root = null;
	this.size = 0;
	this.height = 0;

};

BST.prototype.contains = function(searchValue) {
	if (this.root === null) {
		throw new Error("No nodes in tree");
	} else {
		temp = this.root;
		while (temp.data != searchValue) {
			if (!temp.right && !temp.left) {
					return false;
				}
			if (searchValue < temp.data) {
				temp = temp.left;

			} else {
				temp = temp.right;
			}
		}
		return true;
	}
	
};


BST.prototype.insert = function(array) {

	for (var i = 0; i < array.length; i++) {
		if (this.root === null) {
			this.root = {
				data: array[i],
				left: null,
				right: null
			};
			this.size++;
			this.height++;
		} else {
			temp = this.root;
			var tempHeight = 1;
			while (temp.left || temp.right) {
				if (array[i] > temp.data) {
					if (temp.right === null) {
						temp.right = {
							data: array[i],
							left: null,
							right: null
						};
						break;
					} else {
						temp = temp.right;
						tempHeight++;
					}
				} else {
					if (temp.left === null) {
						temp.left = {
							data: array[i],
							left: null,
							right: null
						};
						break;
					} else {
						temp = temp.left;
						tempHeight++;
					}
				}

			}
			if (array[i] > temp.data) {
				temp.right = {
					data: array[i],
					left: null,
					right: null
				};
				this.size++;
				if (temp.left === null) {
					tempHeight++;
				}
			} else {
				temp.left = {
					data: array[i],
					left: null,
					right: null
				};
				this.size++;
				if (temp.right === null) {
					tempHeight++;
				}
			}
			if (tempHeight > this.height) {
			this.height = tempHeight;
			}
		}
		
	}
	
};

var tree = new BST();

tree.insert([5]);
console.log(tree.isBalanced());
console.log(tree.size);
console.log(tree.height);
console.log(tree.contains(10));
console.log(tree.contains(100));
