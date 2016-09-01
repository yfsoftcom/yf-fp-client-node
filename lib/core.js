/*
Fast Platform Client 4 Nodejs
*/
var FPC = {
    version:'2.0.1',
    author:'yfsoftcom'
};
var _ = require('lodash');
var M = require('../model/common');

module.exports = function(option){
    options = _.extend({mode:'DEV',scope:'api'},option);
    FPC.M = M(option);
    require('./object')(FPC);
    require('./query')(FPC);
    require('./function')(FPC);
    require('./batch')(FPC);
    return FPC;
};
