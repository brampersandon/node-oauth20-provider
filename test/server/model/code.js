var codes = require('./../../fixtures/data.js').codes;

module.exports.save = function(code, userId, clientId, scope, ttl, cb) {
    var obj = {code: code, userId: userId, clientId: clientId, scope: scope, ttl: new Date().getTime() + ttl * 1000};
    codes.push(obj);
    cb(null, obj);
};

module.exports.fetchByCode = function(code, cb) {
    for (var i in codes) {
        if (codes[i].code == code) return cb(null, codes[i]);
    };
    cb();
};

module.exports.getUserId = function(code) {
    return code.userId;
};

module.exports.getClientId = function(code) {
    return code.clientId;
};

module.exports.getScope = function(code) {
    return code.scope;
};