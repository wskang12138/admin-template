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

.
├── README.md
├── index.html           项目入口
├── public
├── src
│   ├── App.tsx          主应用
│   ├── api              请求中心
│   ├── assets           资源目录（图片、less、css等）
│   ├── components       项目组件
│   ├── enums            枚举http状态码     
│   ├── hooks            自定义hooks
│   ├── layout           页面总体布局   
│   ├── mock             mock封装   
│   ├── pages            页面目录
│   ├── routes           路由配置
│   ├── store            状态管理
│   ├── style            公共样式
│   └── utils            基础工具包
│   └── vite-env.d.ts    全局声明
│   ├── main.tsx         主入口
├── tsconfig.json        ts配置
├── .eslintrc.cjs        eslint配置
├── .stylelintrc.cjs     stylint配置
├── .prettierrc.json     prettier配置
├── .gitignore           git忽略配置
└── vite.config.ts       vite配置

## 使用说明

 1.推荐使用yarn
 2.拉取代码 git clone https://github.com/wskang12138/admin-template.git
 3.安装依赖 yarn install
 4.启动：yarn dev
   打包测试：yarn build:test
   打包: yarn build:pro
 5.node版本>=14.0

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