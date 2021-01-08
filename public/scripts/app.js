"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.addOpiton = _this.addOpiton.bind(_this);
        _this.clearOption = _this.clearOption.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.removeOption = _this.removeOption.bind(_this);
        _this.state = {
            options: props.options
        };

        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "handlePick",
        value: function handlePick() {
            console.log("handle pick");
        }
    }, {
        key: "clearOption",
        value: function clearOption() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: "addOpiton",
        value: function addOpiton(option) {
            if (!option) {
                return "ERROR this is an empty option !!";
            } else if (this.state.options.indexOf(option) > -1) {
                return "ERROR this options already exist !!";
            }
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: "removeOption",
        value: function removeOption(option) {

            this.setState(function (prev) {
                return {
                    options: prev.options.filter(function (opt) {
                        return opt !== option;
                    })
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var title = "Indecision Application";
            var subTitle = "Put your life on the hand of the computer";

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subTitle: subTitle }),
                React.createElement(Action, {
                    handlePick: this.handlePick,
                    setDisabled: this.state.options.length == 0
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    setDisabled: this.state.options.length == 0,
                    clearOption: this.clearOption,
                    removeOption: this.removeOption
                }),
                React.createElement(AddOption, { addOpiton: this.addOpiton })
            );
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {

            var options = JSON.parse(localStorage.getItem("options"));
            if (options) {
                this.setState(function () {
                    return { options: options };
                });
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length != this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem("options", json);
            }
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: ["One ", "Two", "Three"]
};
var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        React.createElement(
            "h3",
            null,
            props.subTitle
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            {
                disabled: props.setDisabled,
                onClick: props.handlePick
            },
            "What should i do "
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            {
                disabled: props.setDisabled,
                onClick: props.clearOption
            },
            " Remove ALL "
        ),
        props.options.length == 0 && React.createElement(
            "p",
            null,
            " Enter your options please !"
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                opt: option,
                removeOption: props.removeOption
            });
        })
    );
};

var Option = function Option(props) {
    var opt = props.opt;
    return React.createElement(
        "div",
        null,
        opt,
        React.createElement(
            "button",
            { onClick: function onClick(e) {
                    props.removeOption(opt);
                } },
            " remove"
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.onClickAddOption = _this2.onClickAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: "onClickAddOption",
        value: function onClickAddOption(e) {

            e.preventDefault();
            var option = e.target.elements.option.value;
            var error = this.props.addOpiton(option.trim());
            e.target.elements.option.value = "";
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { onSubmit: this.onClickAddOption },
                    React.createElement(
                        "p",
                        null,
                        " ",
                        this.state.error && this.state.error
                    ),
                    React.createElement("input", { type: "text", name: "option", placeholder: "Enter your option " }),
                    React.createElement(
                        "button",
                        null,
                        " Add "
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, { options: ["hey", "hola", "salem"] }), document.getElementById("appRoot"));

var func = function func() {
    console.log(this);
};
