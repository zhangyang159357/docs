import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "操作篇", icon: "discover", link: "/ /" },
  {
    text: "面试篇",
    icon: "creative",
    prefix: "/interview/",
    children: [
      {
        text: "Java",
        icon: "creative",
        prefix: "java/",
        children: [
            { text: "基础", icon: "more", link: "basic" },
            { text: "集合", icon: "more", link: "" },
            { text: "IO", icon: "more", link: "" },
            { text: "并发编程", icon: "more", link: "" },
            { text: "JVM", icon: "more", link: "" }
        ],
      },
      {
        text: "Foo",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
