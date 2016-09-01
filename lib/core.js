var AE = {
    version:'1.0.1',
    author:'yfdever'
};
var M = require('../model/common');

module.exports = function(option){
    option = option||{mode:'DEV',scope:'api',adapter:'mysql'};
    AE.M = M(option);
    require('./object')(AE);
    require('./query')(AE);
    require('./function')(AE);
    require('./user')(AE);
    require('./batch')(AE);
    return AE;
};