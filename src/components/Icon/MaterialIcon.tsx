// extends div

interface IMaterialIconProps extends React.HTMLProps<HTMLSpanElement> {
  icon: string;
}

const MaterialIcon = ({ icon, className, ...rest }: IMaterialIconProps) => {
  return <span {...rest} className={" material-icons " + className ?? ""}>{icon}</span>;
};

export default MaterialIcon;
