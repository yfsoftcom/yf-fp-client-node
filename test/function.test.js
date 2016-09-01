var should = require("should");
var FPC = require("../lib/core")({endpoint:'http://192.168.1.115:8080/api',scope:'api',appkey:'609388a15b3dfaca',masterKey:'1292b2d414d45c8f97d44354de24c40c',v:'0.0.2'});
describe('Function', function(){
    it('call function', function(done){
        var func = new FPC.Function('foo.test');
        func.invoke({123:123}).then(function(data){
            console.log(data);
            done();
        }).catch(function(err){
            done(err);
        });
    });
    //
    //it('getById', function(done){
    //    var a = new AE.Object('gr_test');
    //    a.getById(17).then(function(data){
    //        console.log(data);
    //        data.save({'name':'55555'}).then(function(data){
    //            done();
    //        });
    //    }).catch(function(err){
    //        done(err);
    //    });
    //});
    //
    //it('save with json', function(done){
    //    var a = new AE.Object('gr_test');
    //    a.set({name:"333"});
    //    a.create().then(function(data){
    //        console.log(data);
    //        data.set('name','444');
    //        data.save().then(function(d){
    //            done();
    //        }).catch(function(err){
    //            done(err);
    //        });
    //    }).catch(function(err){
    //        done(err);
    //    });
    //});
});
