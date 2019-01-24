import * as React from 'react'

interface IButtonProps {
  text?: string;
}

const Button = (props: IButtonProps) => <button type="button">{props.text}</button>

Button.defaultProps = {
  text: 'MyButton',
}

export {
  Button,
  IButtonProps
}
