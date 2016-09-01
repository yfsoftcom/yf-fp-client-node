### 通过该模块可以很快的调用所有的接口信息
全局的命名空间为 AE
AE.Query | AE.Object | AE.Function
基本使用模式为：

var o = new AE.Object('DATA');

//设置对象的字段
AE.Object.set
//获取对象的字段信息
AE.Object.get
//创建一条新的数据，objectId会自动更新一下
AE.Object.create
//更新数据
AE.Object.save
//删除该数据
AE.Object.remove

--

var q = new AE.Query('DATA');

//设置查询的排序
AE.Query.sort
//设置查询的分页
AE.Query.page
//执行查询
AE.Query.find
//执行查询，返回首条数据
AE.Query.first
//执行查询，返回对应ID的数据
AE.Query.get
//执行独立的sql语句
AE.Query.sql


--

var f = new AE.Function('udf');
f.invoke();
//调用自定的函数
AE.Function.call
