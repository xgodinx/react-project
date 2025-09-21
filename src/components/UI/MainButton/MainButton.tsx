export default function MainButton({
  children,
  onClick,
  theme,
  themes,
  ...props
}: any) {
  return (
    <button {...props} onClick={onClick}>
      {children}
    </button>
  );
}
