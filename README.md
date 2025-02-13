# VitePress 博客系统
一个基于 VitePress 搭建的在线博客系统，支持快速开发和部署。
特点
基于 Vue.js：利用 Vue.js 的强大功能，实现高效的前端渲染。
静态生成：支持静态生成，优化加载速度和 SEO。
主题自定义：支持自定义主题和样式，满足个性化需求。
Markdown 支持：支持 Markdown 文件，方便撰写博客内容。
插件系统：支持丰富的插件扩展功能，如代码高亮、评论系统等。
# 项目结构
blog/
├── .vitepress/            # VitePress 配置目录
│   ├── config.js          # 配置文件
│   └── theme/             # 自定义主题目录
├── docs/                  # 博客内容目录
│   ├── guide/             # 指南目录
│   └── api/               # API 文档目录
├── README.md              # 项目说明文件
└── package.json           # 项目依赖文件
# 安装与启动
npm install
npm run dev
npm run build
