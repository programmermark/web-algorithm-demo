const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "c",
          children: [],
        },
        {
          val: "d",
          children: [],
        },
      ],
    },
    {
      val: "e",
      children: [
        {
          val: "f",
          children: [],
        },
        {
          val: "g",
          children: [],
        },
      ],
    },
  ],
};

// - 新建一个队列，把根节点入队；
// - 把队头出队并访问；
// - 把队头的 children 挨个入队；
// - 重复第二、三步，直到队列为空；

/**
 * 广度优先遍历
 */
const bfs = (root) => {
  const queue = [root];
  while (queue.length > 0) {
    const head = queue.shift();
    console.log(head.val);
    head.children.forEach((child) => {
      queue.push(child);
    });
  }
};

bfs(tree);
