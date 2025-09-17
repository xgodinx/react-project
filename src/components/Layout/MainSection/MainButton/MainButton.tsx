export default function MainButton({
  children,
  onClick,
  theme,
  themes,
  ...props
}: any) {
  return (
    <button
      // style={{
      //   backgroundColor: "darkgrey",
      //   color: themes[theme === "dark" ? "light" : "dark"].color,
      // }}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
