import { ButtonHTMLAttributes } from "react";

const Button: React.FC<ButtonHTMLAttributes<any>> = ({
  children,
  ...props
}) => <button {...props}>{children}</button>;

export default Button;
