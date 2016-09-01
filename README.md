### 通过该模块可以很快的调用所有的接口信息
全局的命名空间为 FPC
FPC.Query | FPC.Object | FPC.Function
基本使用模式为：

var o = new FPC.Object('DATA');

//设置对象的字段
FPC.Object.set
//获取对象的字段信息
FPC.Object.get
//创建一条新的数据，objectId会自动更新一下
FPC.Object.create
//更新数据
FPC.Object.save
//删除该数据
FPC.Object.remove

--

var q = new FPC.Query('DATA');

//设置查询的排序
FPC.Query.sort
//设置查询的分页
FPC.Query.page
//执行查询
FPC.Query.find
//执行查询，返回首条数据
FPC.Query.first
//执行查询，返回对应ID的数据
FPC.Query.get
//执行独立的sql语句
FPC.Query.sql


--

var f = new FPC.Function('udf');
f.invoke();
//调用自定的函数
FPC.Function.call
