# 余惠欣的个人简历网站

一个采用「暖黄奶油风」设计的个人简历 / 个人空间网站，纯 HTML + CSS + JavaScript 构建，无任何框架依赖，部署于 GitHub Pages。

**🔗 在线访问：<https://yuhuixin20070110.github.io/my-resume/>**

## 网站内容

| 板块 | 说明 |
| --- | --- |
| 首屏 | 个人照片、一句话介绍、数据条（省级一等奖 / 校级荣誉 / 热爱生活） |
| 关于我 | 个人简介 + 实践纪实「粤疆同月·石榴共圆」（台山都斛中心小学 法治+AI 思政课） |
| 兴趣爱好 | 摄影、电子小狗「啤啤」、追剧、朋友聚会（真实照片展示） |
| 获奖经历 | 2 项省级一等奖、3+ 项校级荣誉 |
| 自我评价 | 记录生活视角的两段式自我介绍 |

## 技术要点

- 语义化 HTML5 + 原生 CSS（CSS 变量设计系统、Flexbox / Grid 响应式布局）
- `IntersectionObserver` 实现导航滚动跟随高亮，支持锚点直达与无障碍语义（`aria-current`）
- 响应式断点：900px / 640px，移动端已适配
- 支持打印样式与 `prefers-reduced-motion`

## 目录结构

```
my-resume/
├── index.html      # 页面结构
├── styles.css      # 全部样式（设计系统 + 响应式 + 打印）
├── app.js          # 导航高亮交互
├── assets/         # 图标
└── photos/         # 个人照片与实践纪实照片
```

## 更新方式

修改本地文件后，在项目目录执行：

```bash
git add -A
git commit -m "update"
git push
```

GitHub Pages 会在 1~2 分钟内自动重新构建并更新线上页面。
