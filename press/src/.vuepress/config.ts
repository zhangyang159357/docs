import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/docs/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "学习笔记",
      description: "我的学习笔记",
    }
  },

  theme,

  shouldPrefetch: false,
});
