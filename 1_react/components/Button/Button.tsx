export type Props = {
  text: string;
}

const Button = (props: Props) => <button type="button">{props.text}</button>

Button.defaultProps = {
  text: 'MyButton',
}

export default Button
