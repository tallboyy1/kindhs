// components/ClientLoadingManager.tsx
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import SplashScreen from "./splashscreen";

const SplashScreenManager: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && <SplashScreen />}
      {children}
    </>
  );
};

export default SplashScreenManager;
