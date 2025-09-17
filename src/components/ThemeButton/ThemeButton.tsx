export default function ThemeButton({ children, onClick, theme, themes }: any) {
  return (
    <button
      style={{
        backgroundColor: themes[theme].background,
        color: themes[theme].color,
      }}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}
