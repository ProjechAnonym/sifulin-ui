import { __makeTemplateObject, __assign } from '../../node_modules/tslib/tslib.es6.js';
import { jsx } from 'react/jsx-runtime';
import { useButton } from 'react-aria';
import React from 'react';
import styled from '@emotion/styled';

var MyButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  padding: 0.5em 1em;\n  font-size: 1em;\n  cursor: pointer;\n  &:hover {\n    background-color: #f4f4f4;\n  }\n  color: ", ";\n"], ["\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  padding: 0.5em 1em;\n  font-size: 1em;\n  cursor: pointer;\n  &:hover {\n    background-color: #f4f4f4;\n  }\n  color: ", ";\n"])), function (props) { return (props.isPressed ? "#e82424" : "blue"); });
var Button = function (props) {
    var buttonRef = React.useRef(null);
    var children = props.children;
    var _a = useButton(props, buttonRef), buttonProps = _a.buttonProps, isPressed = _a.isPressed;
    return (jsx(MyButton, __assign({}, buttonProps, { ref: buttonRef, isPressed: isPressed }, { children: children })));
};
var templateObject_1;

export { Button as default };
