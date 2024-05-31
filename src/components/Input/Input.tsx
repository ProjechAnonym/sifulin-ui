export interface InputProps {
  onChange: (text: string) => void;
}
const Input = (props: InputProps) => {
  const { onChange } = props;
  return (
    <input
      type="text"
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter your name"
    />
  );
};
export default Input;
