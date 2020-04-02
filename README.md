# input-number-plate

## 介绍
input-number-plate是基于Vue的一款虚拟键盘，用于车牌号输入。
简洁，清爽。输入框可以宽度自适应，并且保持宽高比例。

![效果展示](http://www.woke20.com/staticFile/images/upload_b8ce6f66eec395faf3838ec6c70486be.png)

## 如何使用

```
1.安装组件
npm install input-number-plate --save
```

```
2.vue中注册插件
import InputCar from 'input-number-plate'
import 'input-number-plate/lib/inputCar.css'

Vue.use(InputCar)
```

```
3.页面使用
<InputCar @submit="submit"></InputCar>

submit()方法提供了，输入完整车牌号后的回调函数,参数为输入的车牌号
```

## 历史:2019-11-22 @0.1.0
```
1.首次发版
```

## 历史:2019-11-25 @0.2.0
```
1.添加了对输入框位置的判断，如果输入框可能被键盘挡住，则整个页面会被上推
```

## 历史:2019-11-25 @0.2.2
```
1.修改了车牌号位数错误的bug
```

## 历史:2020-4-2 @0.2.3
```
1.修改了键盘下面一排按钮失效的bug
```

## 历史:2020-4-2 @1.0.0
```
1.优化了包的大小
```



