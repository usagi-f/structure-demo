import * as React from 'react'
import { Button, IButtonProps } from 'usagi-sandbox-lib';

const props: IButtonProps = {
  text: 'Hello Dog!',
}

export default () => (
  <>
    <Button />
    <Button>Hello World!</Button>
    <Button {...props}></Button>
  </>
);
