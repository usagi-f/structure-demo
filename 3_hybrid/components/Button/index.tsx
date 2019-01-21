import React from 'react'
// import MyButton from './Button'

export type Props = {
  text?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'my-button': Props
    }
  }
}

export default class Button extends React.Component<Props, {}> {
  public componentDidMount() {
    if (!customElements.get('my-button')) {
      // customElements.define('my-button', MyButton); # 🤔
    }
  }
  public render() {
    return <my-button text={this.props.text}></my-button>
  }
}
