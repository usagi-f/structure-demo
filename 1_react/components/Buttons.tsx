import * as React from 'react'
import { Button, IButtonProps } from 'usagi-sandbox-lib';

const buttonProps: IButtonProps = {
  text: 'Hello Dog!',
}

export default () => (
  <>
    <Button />
    <Button>Hello World!</Button>
    <Button {...buttonProps}></Button>
  </>
);
