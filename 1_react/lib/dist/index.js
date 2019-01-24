import { createElement } from 'react';

var Button = function (props) { return createElement("button", { type: "button" }, props.text); };
Button.defaultProps = {
    text: 'MyButton',
};

export { Button };
