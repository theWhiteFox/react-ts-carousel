import { StyledButton } from "./Styles";

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
  children?: React.ReactNode; // make the component able to receive children elements
  color?: "primary" | "secondary"; // two styling options (you can create as many as you want)
  disabled?: boolean; // make the button disabled or not
};

const Button = ({
  onClick,
  children,
  color = "primary",
  disabled,
}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} color={color} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
