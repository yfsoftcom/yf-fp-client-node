'use strict';
var Q = require('q');
var crypto = require('crypto');
var restify = require('restify');
var _ = require('underscore');

var config = {
    DEV:'http://localhost:8080',
    STAGING:'http://61.147.98.134:8080',
    PRODUCT:'http://api.guoran100.com:9001'
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
    var client = restify.createJsonClient({
        url: config[option.mode || 'DEV']
    });
    return {
        exec:function(action,args){
            var deferred = Q.defer();
            delete args['scope'];
            var arr = {method:action,appkey:option.appkey,masterKey:option.masterKey,timestamp:new Date().getTime(),param:args};
            var sign = signParams(arr);
            arr.sign = sign;
            delete arr.masterKey;
            client.post('/api',arr, function (err, request, response, obj) {
                if(err){
                    deferred.reject(err);
                }else{
                    //TODO:判断接口逻辑的错误代码
                    if(obj.errno==0){
                        deferred.resolve(obj.data);
                    }else{
                        deferred.reject(obj);
                    }
                }
            });
            return deferred.promise;
        }
    };
};

