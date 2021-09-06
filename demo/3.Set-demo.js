let mySet = new Set();

mySet.add(1);
mySet.add(10);
mySet.add({ name: "张三", age: 18 });
mySet.add({ name: "张三", age: 18 });
console.log(mySet);
console.log(mySet.has({ name: "张三", age: 18 }));
