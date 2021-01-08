"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var root = document.getElementById("appRoot");
var toggle = false;

var Toggle = function (_React$Component) {
    _inherits(Toggle, _React$Component);

    function Toggle(props) {
        _classCallCheck(this, Toggle);

        var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));

        _this.state = {
            isShown: true
        };
        return _this;
    }

    _createClass(Toggle, [{
        key: "handleToggle",
        value: function handleToggle() {
            this.setState(function (prevState) {
                return {
                    isShown: !prevState.isShown
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    null,
                    this.state.isShown ? Hide : Show
                ),
                React.createElement(
                    "p",
                    null,
                    this.state.isShown && "this message is here !!!!"
                )
            );
        }
    }]);

    return Toggle;
}(React.Component);

ReactDOM.render(React.createElement(Toggle, null), root);
/*const onClickToggle = (e)=>{
    toggle = !toggle;
    renderToggle();
}
const renderToggle = () =>{
   let template = (
        <div>
            <h1> Built it Toggle </h1>
            <button onClick={onClickToggle}>{ toggle ? "Hide" : "Show" }</button>
            {toggle && <p>this message is now on screen </p>}
        </div>
        );
        ReactDOM.render(template,root);
}
renderToggle();

class person {
    constructor(name, age = 0){
        this.name = name;
        this.age = age;
    };

    getInfos(){
        console.log(`Hi i'm ${this.name} i have ${this.age}`)
    }

}

let kader = new person("Abdelkader", 26);
let azdin = new person("azdin",22);

kader.getInfos();
azdin.getInfos();
*/
