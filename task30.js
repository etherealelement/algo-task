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

	preOrder(node, callback) {
		if (!node) return;

		if (callback) {
			callback(node);
		}

		this.preOrder(node.left, callback);
		this.preOrder(node.right, callback);
	}

	inOrder(node, callback) {}
	postOrder(node, callback) {}
	traverseDFS(callback, method) {
		if (method === 'preOrder') {
			return this.preOrder(this.root, callback);
		}

		if (method === 'inOrder') {
			return this.inOrder(this.root, callback);
		}

		return this.postOrder(this.root, callback);
	}
	traverseBFS() {}
}

const myTree = new BinaryTree();
[1, 2, 3, 4, 5, 6, 7, 8, 10, 20].forEach(item => myTree.add(item));
myTree.traverseDFS(() => console.log(node.value), 'inOrder');
myTree.traverseDFS(() => console.log(node.value), 'postOrder');
myTree.traverseDFS(() => console.log(node.value), 'preOrder');

console.log(myTree);
