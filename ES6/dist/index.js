"use strict";

var text = String.fromCodePoint("21513");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = text[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _i = _step.value;

        console.log(_i);
    }

    // for(let i = 0; i < text.length;i++) {
    //     console.log(text[i]);
    // }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

for (var i in text) {
    console.log(text[i]);
}
// console.log(('吉').charCodeAt());