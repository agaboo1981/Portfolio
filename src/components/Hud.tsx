"use client";

import { useEffect, useState } from "react";

export default function Hud() {
  const [isSecretUnlocked, setIsSecretUnlocked] = useState(false);

  useEffect(() => {
    const handleSecretUnlocked = (event: Event) => {
      const customEvent = event as CustomEvent;
      setIsSecretUnlocked(customEvent.detail);
    };

    window.addEventListener("secretUnlocked", handleSecretUnlocked);
    return () => window.removeEventListener("secretUnlocked", handleSecretUnlocked);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* HUD Corner Elements - Hidden on mobile to prevent collision */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-primary/60 tracking-tighter hidden md:block">
        {isSecretUnlocked ? "[SECRET_LEVEL: UNLOCKED]" : "[SYSTEM_STATUS: ONLINE]"}
      </div>
      <div className="absolute top-4 right-4 font-mono text-[10px] text-primary/60 tracking-tighter hidden md:block">
        [UPTIME: 25y_4m_2d]
      </div>
      <div className="absolute bottom-4 left-4 font-mono text-[10px] text-primary/60 tracking-tighter vertical-text hidden md:block">
        [CONNECTING...]
      </div>
      <div className="absolute bottom-4 right-4 font-mono text-[10px] text-primary/60 tracking-tighter hidden md:block">
        [VERSION: 2.0.26]
      </div>
    </div>
  );
}
