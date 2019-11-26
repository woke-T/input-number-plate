# input-number-plate

## 介绍
此分支为小程序端适配
input-number-plate是基于Vue的一款虚拟键盘，用于车牌号输入。
简洁，清爽。输入框可以宽度自适应，并且保持宽高比例。

![效果展示](http://www.woke20.com/staticFile/images/upload_b8ce6f66eec395faf3838ec6c70486be.png)

## 如何使用（1）

```
1.安装组件
npm install input-number-plate-applet --save
```

```
2.vue中注册插件
import InputCar from 'input-number-plate-applet'
import 'input-number-plate-applet/lib/inputCar.css'

Vue.use(InputCar)
```

```
3.页面使用
<InputCar @submit="submit"></InputCar>

submit()方法提供了，输入完整车牌号后的回调函数,参数为输入的车牌号
```

## 如何使用（2）

```
直接下载文件，将源文件移入项目中使用
```

## 历史:2019-11-22 @0.1.0
```
1.首次发版
```



