var should = require("should");
var FPC = require("../lib/core")({endpoint:'http://192.168.1.115:8080/api',scope:'api',appkey:'609388a15b3dfaca',masterKey:'1292b2d414d45c8f97d44354de24c40c',v:'0.0.1'});
describe('Query', function(){
    //it('first', function(done){
    //    var query = new AE.Query('lantern_personal_center');
    //    query.sort("id-");
    //    query.condition(" 1 = 1");
    //    query.first().then(function(data){
    //        console.log(data);
    //        done();
    //    }).catch(function(err){
    //        console.log('err');
    //        done(err);
    //    });
    //});

    it('find', function(done){
        var query = new FPC.Query('api_webevent');
        query.and(" status>0 ");
        query.find().then(function(data){
            console.log(data);
            done();
        }).catch(function(err){
            console.log('err');
            done(err);
        });
    });//*/
    //it('count', function(done){
    //    var query = new AE.Query('gr_test');
    //    //query.condition(" name = '55555'");
    //    query.count().then(function(c){
    //        console.log(c);
    //        done();
    //    });
    //});

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
