# updateIn
模仿`immutablejs`中的`updateIn`函数，抛弃`immutablejs`其他不需要（嫌弃`immutablejs`压缩过后体积庞大，也用不到其他方法的情况下）的东西，不再需要`fromJS` to `toString`，使用`updateIn`可以一步到位的更新对象属性。
`updateIn`在更新属性的同时不改变旧对象，每次操作都会返回新对象，未修改的属性会继续使用旧对象的引用。

Getting started
---------------
使用npm安装`updateIn`
```shell
npm install --save updatein
```

#### example
```js
import updateIn from 'updatein'

var state = {
	userInfo : {
		username : "",
		password : "",
		phone : "",
		age : 0,
		firstName : "",
		lastName : "",
		headPic : "",
	},
	dataList : [],
	form : {
		phone : "",
		veriCode : "",
	},
}

var state1 = updateIn( state, ["userInfo","username"],"updateIn")
//state1.userInfo.username === "updateIn"


var dataList = [{
	productName : "product_name",
	productCode : "NO123456",
},{
	productName : "product_name",
	productCode : "NO123456",
},{
	productName : "product_name",
	productCode : "NO123456",
}]
var state2 = updateIn( state1, ["dataList"], dataList)
//state2.dataList === dataList

var state3 = updateIn( state2, ["form"], { phone : "136xxxxxxxx", veriCode : "342030" } )
//state3.dataList === state2.dataList
//state2.userInfo === state1.userInfo

```
