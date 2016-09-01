'use strict';
module.exports = (function(option) {
    var callApi = require('./http')(option);
    return {
        //查询列表
        find: function (args) {
            return callApi.exec( (args.scope||option.scope||'api') + '.find', args);
        },
        //查询统计
        count:function(args){
            return callApi.exec( (args.scope||option.scope||'api') + '.count', args);
        },
        //查询统计
        findAndCount:function(args){
            return callApi.exec( (args.scope||option.scope||'api') + '.findAndCount', args);
        },
        //查询符合条件的首个记录
        first: function (args) {
            return callApi.exec( (args.scope||option.scope||'api') + '.first', args);
        },
        create: function (args) {
            return callApi.exec( (args.scope||option.scope||'api') + '.create', args);
        },
        //更新数据
        update: function (args) {
            return callApi.exec( (args.scope||option.scope||'api') + '.update', args);
        },
        //通过id获取唯一的数据
        get: function (args) {
            return callApi.exec( (args.scope||option.scope||'api') + '.get', args);
        },
        //通过id删除符合条件的一条记录
        remove: function (args) {
            return callApi.exec( (args.scope||option.scope||'api') + '.remove', args);
        },
        //删除若干数据
        clear: function (args) {
            return callApi.exec( (args.scope||option.scope||'api') + '.clear', args);
        },
        //调用自定义的函数
        callFunc:function(funcName,args){
            return callApi.exec( funcName, args);
        }
    };
});