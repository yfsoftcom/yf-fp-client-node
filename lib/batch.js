var _ = require('lodash');
var Q = require('q');
var E = require('../error');
module.exports = function(core){
    var m = core.M;
    core.Batch = function(){
        this._l = [];
    };


    core.Batch.prototype.insert = function(l){
        if(l){
            this._l = l;
        }
        var def = Q.defer();

        var list = [];
        var t = '';
        for(var i in this._l){
            var o = this._l[i];
            t = o._t;
            //WARING:有objectid的不允许进行重复的创建
            if(o.objectId != undefined){
                def.reject(E.Object.CREATE_ERROR);
                return def.promise;
            }
            //生成创建时间
            o._d.updateAt = o._d.createAt = new Date().getTime();
            list[i] = o._d;
        }
        var arg = {table:t,row:list};
        m.create(arg).then(function(data){
            def.resolve(data);
        }).catch(function(err){
            def.reject(err);
        });
        return def.promise;
    };

};
