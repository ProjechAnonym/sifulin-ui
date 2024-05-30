export interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}
const Button = (props: ButtonProps) => {
  const { onClick, children } = props;
  return <button onClick={() => onClick && onClick()}>{children}</button>;
};
export default Button;
