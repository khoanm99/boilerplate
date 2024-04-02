'use client';

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

interface LenisWrapperProps {
  children: ReactNode | ReactNode[];
}

const LenisWrapper = ({ children }: LenisWrapperProps) => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return <ReactLenis root>{children}</ReactLenis>;
}

export default LenisWrapper;