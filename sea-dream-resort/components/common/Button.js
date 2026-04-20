const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-6 py-2 rounded-lg font-semibold transition-all duration-300";
  const variants = {
    primary: "bg-primary text-white hover:bg-gray-800",
    gold: "bg-gold text-white hover:bg-yellow-600",
    secondary: "bg-brown-500 text-white hover:bg-brown-600",
    outline:
      "border-2 border-gold text-gold hover:bg-gold hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
