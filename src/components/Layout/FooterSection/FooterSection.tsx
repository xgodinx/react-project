import { useState, useEffect } from "react";
import "./FooterSection.scss";
export default function FooterSection() {
  const [tel, setTel] = useState(0);
  const telcode = "380";

  useEffect(() => {
    const telInterval = setInterval(() => {
      setTel(+(Math.random() * 100000000).toFixed());
    }, 1000);
    return () => clearInterval(telInterval);
  }, []);

  return (
    <footer className="footer">
      <p className="footer__title">Lorem ipsum dolor sit amet.</p>
      <p className="footer__tel">
        Our telephone: <a href="tel:">{telcode + tel}</a>
      </p>
    </footer>
  );
}
