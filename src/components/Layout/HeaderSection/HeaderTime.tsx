import { useState, useEffect } from "react";

function HeaderTime({ theme, themes }: any) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className="header__time" style={{ color: themes[theme].color }}>
      {time.toLocaleTimeString()}
    </div>
  );
}

export default HeaderTime;
