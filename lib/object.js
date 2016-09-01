var _ = require('lodash');
var Q = require('q');
var E = require('../error');
module.exports = function(core){
    var m = core.M;
    core.extend = function(Child, Parent) {

        var F = function(){};
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
        Child.uber = Parent.prototype;
    };

    core.Object = function(t,d){
        if(!_.isString(t)){
            throw new Error('Object Class should be String');
        }
        this._t = t;
        this._d = d||{};
        this.objectId = this._d.id||undefined;
    };

    core.Object.prototype.toJson = function(){
        return this._d;
    };

    core.Object.prototype.print = function(){
        console.log("id="+this.objectId);
        console.log("createAt="+this._d.createAt);
        console.log("updateAt="+this._d.updateAt);
        console.log("data="+JSON.stringify(this._d));
    };

    core.Object.prototype.set = function(k,v){
        //直接传递了对象
        if(_.isObject(k)){
            this._d = _.extend(this._d,k);
        }else{
            this._d[k] = v;
        }
        return this;
    };

    /**
     * 获取参数
     * @param k 键值
     * @returns {*}
     */
    core.Object.prototype.get = function(k){
        if(k){
            return this._d[k];
        }
        return this._d;
    };

    core.Object.prototype.getById = function(id){
        var def = Q.defer();
        this.objectId = id;
        var THIS = this;
        var arg = {table:this._t,id:id};
        m.get(arg).then(function(data){
            THIS._d = data;
            def.resolve(THIS);
        }).catch(function(err){
            def.reject(err);
        });
        return def.promise;
    };

    core.Object.prototype.save = function(d){
        var def = Q.defer();
        //WARING:没有objectid的不允许进行保存
        if(this.objectId == undefined){
            def.reject(E.Object.SAVE_ERROR);
            return def.promise;
        }
        if(d){
            this._d = d;
        }
        this._d.updateAt = new Date().getTime();
        var THIS = this;
        var arg = {table:this._t,condition:' id = '+this.objectId,row:this._d};
        m.update(arg).then(function(data){
            def.resolve(THIS);
        }).catch(function(err){
            def.reject(err);
        });
        return def.promise;
    };

    core.Object.prototype.remove = function(){
        var def = Q.defer();
        //WARING:没有objectid的不允许进行删除
        if(this.objectId == undefined){
            def.reject(E.Object.REMOVE_ERROR);
            return def.promise;
        }
        var arg = {table:this._t,id:this.objectId};
        m.remove(arg).then(function(data){
            def.resolve(1);
        }).catch(function(err){
            def.reject(err);
        });
        return def.promise;
    };

    core.Object.prototype.create = function(d){
        var def = Q.defer();
        //WARING:有objectid的不允许进行重复的创建
        if(this.objectId != undefined){
            def.reject(E.Object.CREATE_ERROR);
            return def.promise;
        }
        if(d){
            this._d = d;
        }
        //生成创建时间
        this._d.updateAt = this._d.createAt = new Date().getTime();
        var THIS = this;
        var arg = {table:this._t,row:this._d};
        m.create(arg).then(function(data){
            THIS.objectId = data.insertId;
            THIS._d.id = THIS.objectId;
            def.resolve(THIS);
        }).catch(function(err){
            def.reject(err);
        });
        return def.promise;
    };
};
