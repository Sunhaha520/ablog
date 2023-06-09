---
title: "使用VuePress搭建个人静态网站"
description: "比Hexo更快捷更简单的静态网站框架"
date: "2023-02-11"
tags: 
 - VuePress
category: 网站搭建
slug: '20230211'
star: 1
cover: https://i.mjj.rip/2023/06/09/bb0a0cad6bd1a493cce6e833090e26ba.png

---
VuePress是一个基于Vue的静态网站生成器，可以用于搭建个人博客、文档网站等。它的优点是易于上手、快速、灵活、且具有Vue的生态系统。

本教程将介绍如何使用VuePress搭建自己的博客。

## 前置知识

在开始搭建之前，你需要了解以下知识：

1. Vue.js的基础知识，包括Vue组件、Vue路由等。
2. VuePress的基础知识，包括VuePress的文件结构、主题、插件等。

如果你还没有了解过以上知识，可以先学习Vue.js官方文档和VuePress官方文档。

## 安装VuePress

确保你已经安装好了Node.js和Git，然后执行以下命令安装VuePress：

```
npm install -g vuepress
```

## 创建VuePress网站

执行以下命令创建VuePress网站：

```
mkdir my-blog
cd my-blog
npm init -y
```

执行完上述命令后，会自动在my-blog目录下生成一个package.json文件。

接着，在my-blog目录下创建一个docs目录，并在docs目录下创建一个README.md文件：

```
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

## 配置VuePress

在my-blog目录下再创建一个.vuepress目录，并在该目录下创建一个config.js文件。

config.js是VuePress的配置文件，用于配置VuePress的插件、主题等。

我们先用默认配置创建一个config.js文件：

```
mkdir .vuepress
echo 'module.exports = {}' > .vuepress/config.js
```

然后，我们在config.js中配置一下title和description：

```
module.exports = {
  title: 'My Blog',
  description: 'This is my blog powered by VuePress'
}
```

至此，我们完成了VuePress的基本配置。

## 预览VuePress

在my-blog目录下执行以下命令预览VuePress：

```
vuepress dev docs
```

执行完上述命令后，会在终端中显示URL，该URL就是你的博客预览链接。打开该链接，就可以看到我们刚才创建的README.md文件中的内容。

## 搭建博客主页

下面，我们要开始搭建博客主页了。

在docs目录下创建一个.vuepress目录，并在该目录下创建一个README.md文件：

```
mkdir .vuepress
echo '# Welcome to My Blog' > docs/.vuepress/README.md
```

然后，在config.js中配置一下home属性：

```
module.exports = {
  title: 'My Blog',
  description: 'This is my blog powered by VuePress',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/' },
      { text: 'About', link: '/about/' }
    ]
  }
}
```

接着，在docs目录下创建一个posts目录用于存放博客文章：

```
mkdir docs/posts
```

## 配置博客主页

我们需要配置主页的样式和内容。

首先，我们要让主页显示我们刚才创建的README.md文档。打开.vuepress/README.md文件，输入以下内容：

```
---
home: true
---
```

然后，我们需要设置一个列表来展示博客文章。打开.vuepress/README.md文件，输入以下内容：

```
---
home: true
---

## Posts

<PostsList />
```

此时，你打开预览链接，应该可以看到一个Posts标题的页面，在这里我们想要把博客文章都展示在这里。接着我们将看看如何通过配置来请求需要展示的文章信息。

## 使用axios请求文章数据

打开一个终端，进入到my-blog目录中安装axios：

```
npm install --save axios
```

创建一个Vue组件来请求文章数据。

在.vuepress/components目录下创建一个PostsList.vue文件。

在PostsList.vue文件中，我们通过computed方法异步请求文章数据，在请求成功后将文章列表渲染成一个列表。

```
<template>
  <ul>
    <li v-for="post in posts" :key="post.slug">
      <router-link :to="post.url">{{ post.title }}</router-link>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      posts: []
    }
  },

  asyncComputed: {
    async posts() {
      const response = await axios.get('/api/posts')
      return response.data.posts
    }
  }
}
</script>
```

在config.js文件中，我们需要在themeConfig中配置一个接口用于请求文章数据：

```
module.exports = {
  title: 'My Blog',
  description: 'This is my blog powered by VuePress',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/' },
      { text: 'About', link: '/about/' }
    ],

    plugins: [
      ['@vuepress/blog', {
        apiBase: '/api',
        postsDir: 'docs/posts',
        permalink: '/:year/:month/:day/:slug'
      }]
    ],

    async data() {
       const response = await axios.get('/api/posts')
       return {
         posts: response.data.posts
       }
    }
  }
}
```

在插件配置中增加@vuepress/blog插件，该插件会自适应docs/posts目录下的文章内容。这个插件还会自动生成一个博客文章路由，以及整理文章数据供我们使用。

在themeConfig中涉及到PostsList组件所显示的数据，我们是通过与接口发起请求之后异步调用数据来显示。这样我们就得到了 VuePress 博客的文章列表。

## 发布博客

在my-blog目录下执行以下命令生成静态文件：

```
vuepress build docs
```

执行完上述命令后，会在my-blog目录下生成一个dist目录。

将dist目录中的文件上传到服务器，即可完成博客的发布。

## 总结

VuePress博客搭建教程就到这里结束了。我们通过一个简单的示例，了解了如何使用VuePress快速搭建自己的博客，并发布到服务器上。

使用VuePress，可以快速完成一个初步规整的博客，使用VuePress轻松集成vue相关各类前端开发建设，功能增强可通过VuePress的插件来实现，同时也支持自定义主题等更高级的定制需求。
