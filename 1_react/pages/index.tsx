import * as React from 'react'
import { Button, IButtonProps } from '../lib/dist';

const props: IButtonProps = {
  text: 'Hello World!',
}

export default () => (
  <>
    <Button {...props} />
    <Button />
  </>
);
