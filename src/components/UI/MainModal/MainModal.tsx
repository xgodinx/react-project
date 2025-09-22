import "./MainModal.scss";
import type { ReactNode } from "react";

interface MainModalProps {
  children: ReactNode;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export default function MainModal({
  children,
  visible,
  setVisible,
}: MainModalProps) {
  const rootClasses = ["mainModal"];

  if (visible) {
    rootClasses.push("active");
  }
  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className="mainModalContent" onClick={(e) => e.stopPropagation()}>
        <button className="mainModalCloseBtn" onClick={() => setVisible(false)}>
          ❌
        </button>
        {children}
      </div>
    </div>
  );
}
