export type Props = {
  text: string;
}

const Button = (props: Props) => <button>{props.text}</button>

Button.defaultProps = {
  text: 'MyButton',
}

export default Button
