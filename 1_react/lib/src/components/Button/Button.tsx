import * as React from 'react'
import styled from 'styled-components'

interface IButtonProps {
  text?: string;
}

const Button = (props: IButtonProps) => <ButtonWithStyle type="button">{props.text}</ButtonWithStyle>

Button.defaultProps = {
  text: 'MyButton',
}

const ButtonWithStyle = styled.button`
  font-size: 24px;
`

export {
  Button,
  IButtonProps
}
