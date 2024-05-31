import { jsx } from 'react/jsx-runtime';

var Input = function (props) {
    var onChange = props.onChange;
    return (jsx("input", { type: "text", onChange: function (e) { return onChange(e.target.value); }, placeholder: "Enter your name" }));
};

export { Input as default };
