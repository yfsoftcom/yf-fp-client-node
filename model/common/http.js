'use strict';
var Q = require('q');
var crypto = require('crypto');
var _ = require('lodash');
var request = require('request');

var _options = {
    mode:'DEV',
    appkey:'',
    masterKey:'',
    v:'0.0.1',
    endpoint:'http://localhost:8080/api'
};

/**
 * 将传入的参数做一个签名的验证，确认其身份和数据的完整性
 * @param args
 */
function signParams (args){
    var md5 = crypto.createHash('md5');
    delete args.sign;
    var ks = [];
    for(var k in args){
        ks.push(k);
    }
    ks = ks.sort();
    var strArgs = [];
    ks.forEach(function(item){
        var val = args[item];
        if(_.isObject(val)){
            val = JSON.stringify(val);
        }
        strArgs.push(item+'='+encodeURIComponent(val));
    });
    var content = strArgs.join('&');
    md5.update(content);
    var d = md5.digest('hex');
    return d;
}


module.exports = function(option){
  option = _.extend(_options,option);
    return {
        exec:function(action,args){
          var endpoint = option.endpoint;

            var deferred = Q.defer();
            delete args.scope;

            //这里如果 action 传入的是object 带有版本号，则需要进行转换
            var v = _options.v;
            if(_.isObject(action)){
              v = action.v || v;
              action = action.action;
            }else if(_.isString(action)){
              var pos = action.indexOf('@');
              if(pos > 1){
                v = action.substr(pos + 1);
                action = action.substr(0,pos);
              }
            }
            var arr = {method:action,appkey:option.appkey,masterKey:option.masterKey,timestamp: _.now(),param:JSON.stringify(args),v:v};
            var sign = signParams(arr);
            arr.sign = sign;
            delete arr.masterKey;
            console.log(arr);
            request.post(endpoint,{form:arr},function(err,r,obj){
              if(!_.isObject(obj)){
                obj = JSON.parse(obj);
              }
              if(err){
                deferred.reject(err);
              }else{
                if(obj.errno != 0){
                    deferred.reject(obj);
                }else{
                    deferred.resolve(obj.data);
                }
              }

            });
            return deferred.promise;
        }
    };
};
