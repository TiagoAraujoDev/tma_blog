"use client";

import classNames from "classnames";
import { useCallback, useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ToTheTopButton: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setScrollY(scrollY);
  }, []);

  const handleClick = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <button
      onClick={handleClick}
      title="Go back to the top"
      className={classNames({
        "fixed bottom-6 right-6 z-20 rounded-full border-2 border-blue-400 p-1":
          scrollY >= 240,
        invisible: scrollY < 240,
      })}
    >
      <FaArrowUp className="text-blue-400" />
    </button>
  );
};

export { ToTheTopButton };
