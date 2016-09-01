var _ = require('underscore');
var Q = require('q');

module.exports = function(core){
    m = core.M;
    core.Query = function(t){
        if(!_.isString(t)){
            throw new Error('Class should be String');
        }
        this._t = t;         //table
        this._s = 'id-';    //sort
        this._l = 100;       //limit
        this._k = 0;        //skip
        this._c = ' 1=1 ';  //condition
        this._f = '*';      //fields
    };

    core.Query.prototype.sort = function(s){
        this._s = s;
        return this;
    };

    core.Query.prototype.page = function(p,l){
        this._l = l||100;
        this._k = (p-1) * this._l;
        return this;
    };

    core.Query.prototype.condition = function(c){
        this._c = c;
        return this;
    };

    core.Query.prototype.and = function(a){
        this._c = this._c +' and ' + a;
        return this;
    }

    core.Query.prototype.or = function(o){
        this._c = this._c +' or ' + o;
        return this;
    }

    //设定查询的字段
    core.Query.prototype.select = function(f){
        //主动包含ID，createAt,updateAt
        if(_.isString(f)){
            f = f.split(',');
        }
        if(!_.contains(f,'id')){
            f.push('id');
        }
        if(!_.contains(f,'createAt')){
            f.push('createAt');
        }
        if(!_.contains(f,'updateAt')){
            f.push('updateAt');
        }
        f = f.join(',');
        this._f = f;
        return this;
    };

    core.Query.prototype.count = function(){
        var def = Q.defer();
        var THIS = this;
        var arg = {table:this._t,condition:this._c};
        m.count(arg).then(function(data){
            def.resolve(data);
        }).catch(function(err){
            def.reject(err);
        });
        return def.promise;
    };

    core.Query.prototype.first = function(){
        var def = Q.defer();
        var THIS = this;
        var arg = {table:this._t,condition:this._c,sort:this._s,limit:this._l,skip:this._k,fields:this._f};
        m.first(arg).then(function(data){
            //未搜索到数据的判断
            if(_.isArray(data)){
                if(data.length == 0){
                    //nodata
                    var o = new core.Object(THIS._t);
                    def.resolve(o);
                }
            }else if(_.isObject(data)){
                //找到了数据
                var o = new core.Object(THIS._t,data);
                def.resolve(o);
            }

        }).catch(function(err){
            def.reject(err);
        });
        return def.promise;
    };

    core.Query.prototype.find = function(){
        var def = Q.defer();
        var THIS = this;
        var arg = {table:this._t,condition:this._c,sort:this._s,limit:this._l,skip:this._k,fields:this._f};
        m.find(arg).then(function(data){
            var o = new core.Object(THIS._t,data);
            def.resolve(o);
        }).catch(function(err){
            def.reject(err);
        });
        return def.promise;
    };

    core.Query.prototype.clear = function(){
        var def = Q.defer();
        var THIS = this;
        var arg = {table:this._t,condition:this._c};
        m.clear(arg).then(function(data){
            def.resolve(data);
        }).catch(function(err){
            def.reject(err);
        });
        return def.promise;
    };

};