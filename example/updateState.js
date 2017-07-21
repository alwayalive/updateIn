import updateIn from '../index.js'

var state = {
	userInfo : {
		username : "",
		password : "",
		phone : "",
		age : 0,
		firstName : "",
		lastName : "",
		headPic : ""
	},
	dataList : []
	form : {
		phone : "",
		veriCode : ""
	}
}

var state1 = updateIn( state, ["userInfo","username"],"updateIn")
//state1.userInfo.username === "updateIn"


var dataList = [{
	productName : "product_name"
	productCode : "NO123456"
},{
	productName : "product_name"
	productCode : "NO123456"
},{
	productName : "product_name"
	productCode : "NO123456"
}]
var state2 = updateIn( state1, ["dataList"], dataList)
//state2.dataList === dataList

var state3 = updateIn( state2, ["form"], { phone : "136xxxxxxxx", veriCode : "342030" } )
//state3.dataList === state2.dataList
//state2.userInfo === state1.userInfo




