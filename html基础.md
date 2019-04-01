# HTML
## 1. HTML常见元素
### head
- meta
  ```html
  <meta charset="utf-8">
  <!-- 视口 ，宽度为设备（屏幕）宽度，初始化和最大缩放为1，用户不能调整缩放，这样可以让页面适配移动端-->
  <meta name="viewport" content="width=device-width,inital-scale=1.0,maximum-scale=1.0,user-scalable=no">
  <!-- 指定一个基础路径，所有链接都以此链接为基准计算 -->
  <base href="/">

  ```
- title
- style
- link
- script
- base
### body
- div / section/ article/ aside/ header/ footer
- p
- span/em/strong
- table/thead/tbody/tr/td
- ul(有序)/ol(无序)/li/dl/dt/dd
- a
- form/input/select/textarea/button
## 2.HTML重要属性
- a[href,target]
  
  target需要在哪里打开链接，默认为self，即在当前窗口打开 
- img[src,alt]
  
  alt当scr不可用时，可以将图片内容用alt显示出来
- table td[colspan,rowspan]
  
  合并单元格
- form[target,method,enctype]
  
  target表单提交到哪里，method是提交的方式（get或者post），enctype是用那种编码（针对post），有urlencode和formdata（可以上传文件）
- input[type,value]
- button[type]
- select>option[value]
  
  下拉框
- label[for]
  
  跟表单相关联（单选框与复选框）