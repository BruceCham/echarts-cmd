define(function (require, exports, module) {
    var idStart = 2311;
    return function () {
        return 'zrender__' + idStart++;
    };
});