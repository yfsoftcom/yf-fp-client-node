var _ = require('underscore');
var Q = require('q');
var E = require('../error');


module.exports = function(core){
    var m = core.M;
    function User(){
    };

    /**
     * 验证字段是否重复
     * @param col 需要验证的字段 如 phone,name,openid 等等
     * @param val 需要验证的值
     * @returns {*|promise}
     */
    User.prototype.checkExists = function(col,val){
        var def = Q.defer();
        def.reject({erro:-99,message:'未实现该方法'});
        return def.promise;
    };

    //TODO:注册流程
    User.prototype.signUp = function(loginname,loginpass,metadata){
        //进入注册的流程
        var def = Q.defer();
        //WARING:有objectid的不允许进行重复的创建
        //if(this.objectId != undefined){
        //    def.reject(E.Object.CREATE_ERROR);
        //    return def.promise;
        //}
        ////生成创建时间
        //this._d.updateAt = this._d.createAt = _.now();
        //var THIS = this;
        //var arg = {table:this._t,row:this._d,scope:'api'};
        //m.create(arg).then(function(data){
        //    THIS.objectId = data.insertId;
        //    def.resolve(THIS);
        //}).catch(function(err){
        //    def.reject(err);
        //});
        def.reject({erro:-99,message:'未实现该方法'});
        return def.promise;
    };

    User.prototype.signIn = function(loginname,loginpass){
        var def = Q.defer();
        var THIS = this;
        //进入登录的流程
        //var condition = " login_name = '" + loginname + "'";
        m.callFunc('api.UCenter.signIn',{loginname:loginname,loginpass:loginpass}).then(function(data){
            def.resolve(data);
        }).catch(function(err){
            def.reject(err);
        });
        return def.promise;
    };

    core.User = User;

};