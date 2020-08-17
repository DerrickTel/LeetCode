/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.list = []
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.list.push(x)
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  return this.list.pop()
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.list[this.list.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return Math.min(...this.list)
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/
var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());  // --> 返回 -3.
minStack.pop();
console.log(minStack.top());      //--> 返回 0.
console.log(minStack.getMin());  // --> 返回 -2.
