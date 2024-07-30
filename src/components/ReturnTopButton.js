import React, { useEffect, useState } from "react";

const ReturnTopButton = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollWindow);
    return () => {
      window.removeEventListener("scroll", scrollWindow);
    };
  }, []);

  const scrollWindow = () => {
    const top = 100;
    let scroll = 0;
    scroll = window.scrollY;
    if (top <= scroll) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };

  const hidden = "hidden";

  const active = "block";

  const style = isButtonActive ? active : hidden;

  return (
    <button className={`fixed bottom-5 right-5 hover:font-bold hover:scale-110 bg-rose-300 rounded-full w-12 h-12 sm:w-16 sm:h-16 ${style}`} onClick={returnTop}>
      TOP
    </button>
  );
};

export default ReturnTopButton;
