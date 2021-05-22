/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {

    if (this.root === null) return 0;
    let depth = 1;
    let nodesToVisit = [this.root];
    let leafFound = false;

    while (!leafFound){

      let current = nodesToVisit.shift();

      if ((current.left === null) && (current.right === null)){
        leafFound = true;
      }

      else{
        depth++;
        nodesToVisit.push(current.left);
        nodesToVisit.push(current.right);
      }
    }

    return depth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (this.root === null) return 0;
    let depth = 1;
    let nodesToVisit = [this.root];

    while (nodesToVisit.length){

      let current = nodesToVisit.pop();
      if ((current.left !== null) || current.right !== null){
        depth++;
      }

      if (current.left !== null){
        nodesToVisit.push(current.left);
      }
      if (current.right !== null){
        nodesToVisit.push(current.right);
      }
    }
    return depth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  //I missed the part about the path not needing to start at the root, so the function I've
  //written is for that case, but I reviewed the solution and understand the approach,
  //using recursion to calculate both an updated result, as well as the amount each node is 
  //capable of contributing to the path above it (what the helper funciton returns)

  maxSum() {
    if (this.root === null) return 0;
    let sum = this.root.val;
    let nodesToVisit = [this.root];

    while (nodesToVisit.length){

      let current = nodesToVisit.pop();

      if ((current.left === null) && (current.right === null)){
        sum = sum;
      }

      else if ((current.left !== null) && (current.right === null)){
        sum = sum + current.left.val;
        nodesToVisit.push(current.left)
      }

      else if ((current.left === null) && (current.right !== null)){
        sum = sum + current.right.val;
        nodesToVisit.push(current.right)  
      }

      else if (current.left.val > current.right.val){
        sum = sum + current.left.val;
        nodesToVisit.push(current.left)
      }

      else {
        sum = sum + current.right.val;
        nodesToVisit.push(current.right)
      }
    }
    return sum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

    if (this.root === null) return null;
    let result = null;
    let nodesToVisit = [this.root];

    while (nodesToVisit.length){

      let current = nodesToVisit.pop();

      if ((current.val > lowerBound) && ((current.val < result) || (result === null))){
        result = current.val;
      }

      if (current.left !== null){
        nodesToVisit.push(current.left);
      }
      if (current.right !== null){
        nodesToVisit.push(current.right);
      }
    }
    return result;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

let smallLeft = new BinaryTreeNode(5);
let smallRight = new BinaryTreeNode(5);
let smallRoot = new BinaryTreeNode(6, smallLeft, smallRight);
smallTree = new BinaryTree(smallRoot);

let node6 = new BinaryTreeNode(1);
let node5 = new BinaryTreeNode(1);
let node4 = new BinaryTreeNode(2);
let node3 = new BinaryTreeNode(3, node4, node6);
let node2 = new BinaryTreeNode(5, node3, node5);
let node1 = new BinaryTreeNode(5);
let root = new BinaryTreeNode(6, node1, node2);

smallTree.nextLarger(4);

module.exports = { BinaryTree, BinaryTreeNode };
