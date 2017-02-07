'use strict';

var Make = {};

Make.observer = function (object) {
    
    object = object || {};
    
    if (object.subject === undefined) {
        object.subject = {};
    }
    if (object.update === undefined) {
        object.update = function () {};
    }
    
    return object;
};

Make.subject = function (object) {
    
    object = object || {};

    var o = [],
        find,
        attach, detach, notify;

    find = function (observer) {
        var index = -1;
        o.forEach(function (e, i) {
            if (observer === e) {
                index = i;
            }
        });
        return index;
    };
    
    attach = function (object) {
        var index = find(object);
        if (index === -1) {
            object.subject = this;
            o.push(object);
        }
        return this;
    };

    detach = function (object) {
        var index = find(object);
        if (index !== -1) {
            o.splice(index, 1);
        }
        return this;
    };
    
    notify = function () {
        o.forEach((s) => s.update.apply(s, arguments));
        return this;
    };

    object.attach = attach;
    object.detach = detach;
    object.notify = notify;

    return object;
};
