import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  // console.log(scrollPosition)
  const handleScroll = (e) => {
    console.log(window.pageYOffset);
    const position = window.pageYOffset;

    console.log(position);

    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return [scrollPosition];
};

export default useScrollPosition;
