import React from 'react'
import Button from '../components/Button'

const props = {
  text: 'Hello World!',
}

export default () => (
  <>
    <Button {...props} />
    <Button />
  </>
);
