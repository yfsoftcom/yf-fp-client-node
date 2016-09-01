var should = require("should");
var AE = require("../lib/core")({adapter:'rest'});
describe('Object', function(){
///*
it('create with json', function(done){
        var a = new AE.Object('gr_test');
        a.set({name:"123"});
        a.create().then(function(data){
            console.log(data);
            done();
        }).catch(function(err){
            done(err);
        });
    });//*/
/*
    it('getById', function(done){
        var a = new AE.Object('gr_test');
        a.getById(17).then(function(data){
            console.log(data);
            done();
            //data.save({'name':'55555'}).then(function(data){
            //    done();
            //});
        }).catch(function(err){
            done(err);
        });
    });
/*
    it('save with json', function(done){
        var a = new AE.Object('gr_test');
        a.set({name:"333"});
        a.create().then(function(data){
            console.log(data);
            data.set('name','444');
            data.save().then(function(d){
                done();
            }).catch(function(err){
                done(err);
            });
        }).catch(function(err){
            done(err);
        });
    });//*/
});