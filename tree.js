/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {

    if(this.root === null) return 0;

    let sum = 0;
    let nodesToVisit = [this.root];

    while(nodesToVisit.length){
      let current = nodesToVisit.pop();
      sum = sum + current.val;
      for (let child of current.children){
        nodesToVisit.push(child);
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {

    if(this.root === null) return 0;

    let numEvens = 0;
    let nodesToVisit = [this.root];

    while(nodesToVisit.length){
      let current = nodesToVisit.pop();
      if(current.val%2 === 0) numEvens++;
      for (let child of current.children){
        nodesToVisit.push(child);
      }
    }
    return numEvens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(this.root === null) return 0;

    let numGreater = 0;
    let nodesToVisit = [this.root];

    while(nodesToVisit.length){
      let current = nodesToVisit.pop();
      if(current.val > lowerBound) numGreater++;
      for (let child of current.children){
        nodesToVisit.push(child);
      }
    }
    return numGreater;
  }
}

module.exports = { Tree, TreeNode };
