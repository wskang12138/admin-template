# react18-vite3-ts-antd4+react-router-dom6V

简体中文 | [English](./README.en-US.md)

## 介绍

一个使用 react+vite3+ts+react-router-dom6V搭建的轻量级后台管理模板。

## 特点

- 轻量级没有那么多其它的插件
- 已对```axios```进行再次封装,可以直接使用，进行请求接口时采用再次封装的```npropress```。
- 可使用图片作为图标，自定义组件。
- 已配置好路由，菜单栏刷新采用cookie的方式进行保存菜单的展开状态。
- 已配置好规范化文件。
- 代码简单，易懂，适合初学者学习。

## 规范
### 代码规范之JS/TS规范
使用eslint
### 代码规范之CSS规范
CSS检查代码规范使用 stylelint 插件
### 提交规范
使用commitlint
### 自动化格式代码
使用prettier
### 配合husky,提交规范检测格式配置如下：
```bash
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "*.{less,css}": [
      "prettier --write",
      "stylelint --fix",
      "git add"
    ],
    "*.{ts,tsx}": [
      "prettier --parser=typescript --write",
      "eslint --fix",
      "git add"
    ]
  }
 ```
## 总体工程结构
```bash
.
├─ .vscode                # vscode推荐配置
├─ public                 # 静态资源文件（忽略打包）
├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ config              # 全局配置项
│  ├─ enums               # 项目枚举
│  ├─ hooks               # 常用 Hooks
│  ├─ mock                # Mock封装
│  ├─ layouts             # 框架布局
│  ├─ routers             # 路由管理
│  ├─ store               # store
│  ├─ styles              # 全局样式
│  ├─ utils               # 工具库
│  ├─ pages               # 项目所有页面
│  ├─ App.tsx             # 入口页面
│  ├─ main.tsx            # 入口文件
│  └─ vite-env.d.ts       # vite 声明文件
├─ .editorconfig          # 编辑器配置（格式化）
├─ .env                   # vite 常用配置
├─ .env.development       # 开发环境配置
├─ .env.production        # 生产环境配置
├─ .eslintignore          # 忽略 Eslint 校验
├─ .eslintrc.cjs          # Eslint 校验配置
├─ .gitignore             # git 提交忽略
├─ .prettierignore        # 忽略 prettier 格式化
├─ .prettierrc.json       # prettier 配置
├─ .stylelintignore       # 忽略 stylelint 格式化
├─ .stylelintrc.cjs       # stylelint 样式格式化配置
├─ commitlintrc.cjs       # git 提交规范配置
├─ index.html             # 入口 html
├─ yarn.lock              # 依赖包包版本锁
├─ package.json           # 依赖包管理
├─ postcss.config.js      # postcss 配置
├─ README.md              # README 介绍
├─ tsconfig.json          # typescript 全局配置
└─ vite.config.ts         # vite 配置

```
## 使用说明
```bash
 1.推荐使用yarn
 2.拉取代码 git clone https://github.com/wskang12138/admin-template.git
 3.安装依赖 yarn install
 4.启动：yarn dev
   打包测试：yarn build:test
   打包: yarn build:pro
 5.node版本>=14.0
```
## 注意
重新配置自己的.git需要重新安装lint-staged 不然格式化不会生效
pre-commit执行
```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
yarn stylelint
yarn lint-staged
```

## 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request
