import React from 'react'

const props: MyButtonProps = {
  text: 'Hello World!',
}

export default () => (
  <>
    <my-button {...props}></my-button>
    <my-button></my-button>
  </>
);
