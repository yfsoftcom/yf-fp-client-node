var should = require("should");
var PFC = require("../lib/core")({scope:'activity'});
describe('Batch', function(){
    it('call Batch', function(done){
        var o1 = new PFC.Object('gr_test',{'name':'f1'});
        var o2 = new PFC.Object('gr_test',{'name':'f2'});
        var batch = new PFC.Batch();
        batch.insert([o1,o2]).then(function(data){
            console.log(data);
            done();
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
