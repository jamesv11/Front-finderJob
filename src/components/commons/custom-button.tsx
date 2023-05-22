import { PropsButton } from "../../interfaces/interface";

export const CustomButton = ({
  className,
  content,
  disabled,
  loading,
  onClick,
  style,
  buttonIcon,
  ...otherProps
}: PropsButton) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${className} shadow`}
      style={style}
      {...otherProps}
    >
      {loading ? <h2>Loading...</h2> : content}
    </button>
  );
};