"use client";

import usePreventLenisScroll from "@/hooks/usePreventLenisScroll";
import { useState } from "react";
import { useScrollLock } from "usehooks-ts";

const ButtonLockBodyWhenUseLenis = () => {
  const [isLock, setIsLock] = useState<boolean>(false);
  const { lock, unlock } = useScrollLock({
    autoLock: false
  })
  const handleClick = () => {
    setIsLock(!isLock);
    // isLock ? unlock() : lock();
  };

  usePreventLenisScroll(isLock);
  return <button onClick={handleClick}>Click me to lock lenis</button>;
};

export default ButtonLockBodyWhenUseLenis;
