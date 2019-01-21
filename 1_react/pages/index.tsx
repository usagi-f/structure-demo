import Button, { ButtonProps } from '../components/Button';

const props: ButtonProps = {
  text: 'Hello World!',
}

export default () => (
  <>
    <Button {...props} />
  </>
);
