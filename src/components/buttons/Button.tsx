import { classNames } from "../../utils";
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  classNames?: string;
  secondary?: boolean;
}

const styleClass = {
  root: (secondary: boolean) =>
    classNames(
      "h-8 w-20 task-shadow flex bg-white font-medium text-xs justify-center items-center leading-4 hover:transform-gpu hover:scale-105",
      !secondary
        ? "bg-white text-task-blue border-eq-red border-2 "
        : "bg-task-blue text-white "
    ),
};

const Button = ({
  children,
  classNames,
  onClick,
  secondary,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={styleClass.root(secondary ?? false) + classNames}
    >
      {children}
    </button>
  );
};

export default Button;
