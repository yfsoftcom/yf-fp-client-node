var _ = require('underscore');
var should = require("should");
var AE = require("../lib/core")({scope:"ec"});
describe('User', function(){
    //it('create with json', function(done){
    //    var a = new AE.User();
    //    a.set({login_name:"123",login_pass:"456"});
    //    a.create().then(function(data){
    //        console.log(data.objectId);
    //        done();
    //    }).catch(function(err){
    //        done(err);
    //    });
    //});

    //it('getById', function(done){
    //    var a = new AE.User();
    //    a.getById(1).then(function(data){
    //        console.log(data);
    //        done();
    //    }).catch(function(err){
    //        done(err);
    //    });
    //});

    //it('signUp', function(done){
    //    var a = new AE.User();
    //    a.signUp('1234','4564',{lastlogintime: _.now()}).then(function(data){
    //        console.log(data);
    //        done();
    //    }).catch(function(err){
    //        done(err);
    //    });
    //});

    it('signIn', function(done){
        var a = new AE.User();
        a.signIn('123','456').then(function(data){
            done();
        }).catch(function(err){
            done(err);
        });
    });


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