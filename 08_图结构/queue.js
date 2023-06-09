// 封装队列类
function Queue() {
  // 属性
  this.items = [];

  // 方法
  // 1. 将元素加入到队列中
  Queue.prototype.enqueue = function (element) {
    this.items.push(element);
  };

  // 2. 从队列中删除前端元素
  Queue.prototype.dequeue = function () {
    return this.items.shift();
  };

  // 3. 查看前端的元素
  Queue.prototype.front = function () {
    return this.items[0];
  };

  // 4. 查看队列是否为空
  Queue.prototype.isEmpty = function () {
    return this.items.length == 0;
  };

  // 5. 查看队列中的元素的个数
  Queue.prototype.size = function () {
    return this.items.length;
  };

  // 6. toString方法
  Queue.prototype.toString = function () {
    // 20 10 12 8 7
    let resultString = "";
    for (let i of this.items) {
      resultString += i + " ";
    }
    return resultString;
  };
}
