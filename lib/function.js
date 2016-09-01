var Q = require('q');
var E = require('../error');
module.exports = function(core){
    var m = core.M;
    core.Function = function(f){
        this._f = f;
    };
    core.Function.prototype.invoke = function(args){
        var def = Q.defer();
        m.callFunc(this._f,args).then(function(data){
            def.resolve(data);
        }).catch(function(err){
            def.reject(err);
        });
        return def.promise;
    };
};
