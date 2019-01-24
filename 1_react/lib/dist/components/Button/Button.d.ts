/// <reference types="react" />
interface IButtonProps {
    text?: string;
}
declare const Button: {
    (props: IButtonProps): JSX.Element;
    defaultProps: {
        text: string;
    };
};
export { Button, IButtonProps };
