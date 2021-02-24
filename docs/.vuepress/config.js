module.exports = {
  title: "个人日记", // 设置网站标题
  description: "Adroi",
  themeConfig: {
    // nav : [
    //     { text: '接口定义', link: '/apiword' },
    //     { text: '接口字段定义', link: '/api' },
    //     { text: '附录：错误码', link: '/error' },
    //     { text: '附录：错误码', link: '/error' }
    // ],
    sidebar: [
      {
        title: "Group 1",
        collapsable: true,
        children: ["/guide/","/guide/a"],
      },
      {
        title: "Group 2",
        children: [
          /* ... */
        ],
      },
    ],
    sidebarDepth: 2,
  },
};
