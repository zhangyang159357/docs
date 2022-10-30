import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      icon: "note",
      text: "面试篇",
      prefix: "interview/",
      children: [
        {
          text: "Java",
          icon: "java",
          collapsable: true,
          prefix: "java/",
          children: [
            "basic/",
            "collection/",
            "io/",
            "concurrent/",
            "jvm/",
          ],
        },
      ],
    },
    {
      text: "文档",
      icon: "note",
      prefix: "guide/",
      children: "structure",
    },
    "slides",
  ],
});
