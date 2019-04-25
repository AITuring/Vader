## html基础知识

### 有序列表(ol)
语法格式：
```html
<ol type=value1 start=value2>
    <li></li>
</ol>
```
**注**：value1表示有序列表项目符号的类型，value2表示项目开始的数值

type有以下类型：
type类型 | 描述
---- | ---
1 | 列表项目用数字表示(1,2,3...)
a |  列表项目用小写字母表示(a,b,c...)
A | 列表项目用大写字母表示(A,B,C...)
i | 列表项目用小写罗马字母表示(i,ii,iii...)
I | 列表项目用大写罗马字母表示(I,II,III...)

### 无序列表(ul)
ul的type类型：
- 默认： disc(实心圆)
- 方块：square
- 空心圆：circle

语法格式：
```html
<ul>
    <li>one</li>
    <li>two</li>
</ul>
```
### 自订列表(dl)
自定义列表以`<dl>`标签开始。每个自定义列表项以`<dt>`开始。每个自定义列表项的定义以`<dd>`开始。自定义列表的列表项前没有任何项目符号。

例如：
```html
<dl>
                <dt>春天</dt>
                <dd>万物复苏 </dd>
                <dd>百花争艳 </dd>
                <dd>适合学习</dd>
                <dt>夏天</dt>
                <dd>夏日绵绵</dd>
                <dd>烈日炎炎</dd>
                <dd>适合学习</dd>
            </dl>

```
运行效果：
```
春天
    万物复苏
    百花争艳
    适合学习
夏天
    夏日绵绵
    烈日炎炎
    适合学习
```
### <meta>
<meta>标签提供关于 HTML 文档的元数据：描述（description）、关键词（keywords）、文档的作者（author）等其他元数据。

例如：
```html
<!DOCTYPE HTML>
<html>
<head>
    <meta name="author" content="www.shiyanlou.com"/>
    <meta name="description"  content="A simple example"/>
</head>
<body>
    <a href="https://www.baidu.com">百度</a>
</body>
</html>
```
### 块级元素
- 总是独占一行，表现为另起一行开始，而且其后的元素也必须另起一行显示。宽度(width)、高度(height)、内边距(padding)和外边距(margin)都可控制。
- 常见块级元素： `<h1>`,`<p>`, `<ul>`, `<table>`。

### 内联元素