var should = require("should");
var rest = require('../model/common/http.js')({scope:'api'});
describe('rest', function(){
    it('test', function(done){
        rest.exec('api.foo.foo',{}).then(function(data){
            done(data);
        }).catch(function(err){
            //console.log(err);
            done(err);
        });
    });
});
