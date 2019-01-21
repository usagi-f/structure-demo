type MyButtonProps = { text?: string }

declare namespace JSX {
  interface IntrinsicElements {
    'my-button': MyButtonProps
  }
}
