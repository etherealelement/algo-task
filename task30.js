const tree = {
	value: 8,
	left: {
		value: 6,
		left: null,
		right: null,
	},
	right: {
		value: 10,
		left: {
			value: 11,
			left: null,
			right: null,
		},
	},
};

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree {
	constructor() {
		this.root = null;
	}

	add(value) {
		const node = new Node(value);
		if (!this.root) {
			this.root = node;
			return;
		}

		let currentNode = this.root;

		while (currentNode) {
			if (node.value < currentNode.value) {
				if (!currentNode.left) {
					currentNode.left = node;
					return;
				}
				currentNode = currentNode.left;
			} else {
				if (!currentNode.right) {
					currentNode.right = node;
					return;
				}
				currentNode = currentNode.right;
			}
		}
	}
}

const myTree = new BinaryTree();
myTree.add(8), myTree.add(7), console.log(myTree);
