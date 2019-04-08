"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Human =
/*#__PURE__*/
function () {
  function Human(username, age) {
    _classCallCheck(this, Human);

    this.username = username;
    this.age = age;
  }

  _createClass(Human, [{
    key: "showInfo",
    value: function showInfo() {
      return "".concat(this.username, " ").concat(this.age);
    }
  }]);

  return Human;
}();

var samir = new Human("Samir Dadash-zade", 28);
console.log(samir.showInfo());