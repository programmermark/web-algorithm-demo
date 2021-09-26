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

/**
 * 树的深度优先遍历策略是通过递归去遍历整个树
 */
const dfs = (root) => {
  console.log(root.val);
  // root.children.forEach((child) => dfs(child));
  root.children.forEach(dfs);
};

dfs(tree); // 输出 a、b、c、d、e、f、g
