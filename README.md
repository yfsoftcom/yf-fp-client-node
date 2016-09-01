## fpc4n
> client for fast platform

### 1. Overview
配套yf-api-server使用到的 nodejs 客户端模块

可以在nodejs应用中方便的使用yf-api-server的所有服务

全局的命名空间为 FPC

FPC.Query | FPC.Object | FPC.Function

### 2. Install
`
$ npm install fpc4n --save
`

#### 2.1 Init
```javascript
var FPC = require("fpc4n");
var client = FPC({endpoint:'http://192.168.1.115:8080/api',scope:'api',appkey:'609388a15b3dfaca',masterKey:'1292b2d414d45c8f97d44354de24c40c',v:'0.0.2'});
```

### 3. API
---
#### 3.1. 查询 query

##### 3.1.1 first
```javascript
var o = new FPC.Query('gr_test');
o.first().then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
});
```

##### 3.1.2 getById
```javascript
var o = new FPC.Object('gr_test');
o.getById(64).then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
});
```

##### 3.1.3 find
```javascript
var query = new FPC.Query('api_webevent');
query.condition(" status > 0 ");
query.find().then(function(list){
    for(var l in list){
        console.log(list[l]._d);
    }
}).catch(function(err){
    console.log(err);
});
```

##### 3.1.4 count
```javascript
var query = new FPC.Query('api_webevent');
query.condition(" status > 0 ");
query.count().then(function(c){
    console.log(c);
}).catch(function(err){
    console.log(err);
});
```

##### 3.1.5 findAndCount
```javascript
var query = new FPC.Query('api_webevent');
query.condition(" status > 0 ");
query.findAndCount().then(function(data){
    console.log(data.rows);
    console.log(data.count);
}).catch(function(err){
    console.log(err);
});
```

##### 3.1.6 clear
```javascript
var query = new FPC.Query('api_webevent');
query.condition(" status > 0 ");
query.clear().then(function(data){
    console.log(data);
}).catch(function(err){e
    console.log(err);
});
```

---
#### 3.2. 创建 create
```javascript
var o = new FPC.Object('gr_test');
o.set({name:'hhh'})
o.create().then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
});
```

---
#### 3.3. 删除 remove
```javascript
var o = new FPC.Object('gr_test');
o.getById(64).then(function(data){
    o.remove().then(function(flag){
      // flag should be 1
    });
}).catch(function(err){
    console.log(err);
});
```

---
#### 3.4. 更新 save
```javascript
var o = new FPC.Object('gr_test');
o.getById(64).then(function(data){
    o.set('val','test');
    o.save().then(function(flag){
      // flag should be 1
    });
}).catch(function(err){
    console.log(err);
});
```
