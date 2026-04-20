import { ReactNode } from "react";

interface IOSDeviceProps {
  children: ReactNode;
  width?: number;
  height?: number;
  dark?: boolean;
}

/**
 * iPhone 14 Pro mockup. Children render inside the viewport
 * (inset from bezel, overflow hidden). Used as the stage for
 * looping feature-showcase animations.
 */
const IOSDevice = ({
  children,
  width = 402,
  height = 874,
  dark = false,
}: IOSDeviceProps) => {
  const bg = dark ? "#000" : "#fff";
  const barFg = dark ? "#fff" : "#000";

  return (
    <div
      className="relative mx-auto select-none"
      style={{
        width,
        height,
        borderRadius: 48,
        background: dark ? "#000" : "#f8f8f8",
        boxShadow:
          "0 30px 60px -30px rgba(0,0,0,0.25), 0 0 0 2px rgba(0,0,0,0.08), inset 0 0 0 3px rgba(0,0,0,0.04)",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", system-ui, sans-serif',
      }}
    >
      {/* Screen inset */}
      <div
        className="absolute overflow-hidden"
        style={{
          inset: 10,
          borderRadius: 40,
          background: bg,
        }}
      >
        {/* Status bar */}
        <div
          className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 pt-4"
          style={{ zIndex: 10, color: barFg }}
        >
          <span className="text-sm font-semibold tabular-nums">9:41</span>
          <div className="flex items-center gap-1.5">
            {/* cellular */}
            <svg width="17" height="11" viewBox="0 0 17 11" fill={barFg}>
              <rect x="0" y="7" width="3" height="4" rx="0.5" />
              <rect x="4" y="5" width="3" height="6" rx="0.5" />
              <rect x="8" y="3" width="3" height="8" rx="0.5" />
              <rect x="12" y="0" width="3" height="11" rx="0.5" />
            </svg>
            {/* wifi */}
            <svg width="16" height="11" viewBox="0 0 16 11" fill={barFg}>
              <path d="M8 2.2c2.1 0 4.1.8 5.6 2.2l1.3-1.3A9 9 0 0 0 8 .6 9 9 0 0 0 1.1 3.1l1.3 1.3A8 8 0 0 1 8 2.2Z" />
              <path d="M8 5.5c1.3 0 2.6.5 3.6 1.4l1.3-1.3A7 7 0 0 0 8 4 7 7 0 0 0 3.1 5.6l1.3 1.3A5 5 0 0 1 8 5.5Z" />
              <path d="M8 8.6a2.1 2.1 0 0 1 1.5.7l-1.5 1.5L6.5 9.3A2.1 2.1 0 0 1 8 8.6Z" />
            </svg>
            {/* battery */}
            <svg width="25" height="11" viewBox="0 0 25 11">
              <rect
                x="0.5"
                y="0.5"
                width="22"
                height="10"
                rx="2.5"
                stroke={barFg}
                fill="none"
                opacity="0.4"
              />
              <rect x="23" y="3.5" width="1.5" height="4" rx="0.75" fill={barFg} opacity="0.4" />
              <rect x="2" y="2" width="19" height="7" rx="1.5" fill={barFg} />
            </svg>
          </div>
        </div>

        {/* Dynamic island */}
        <div
          className="absolute rounded-full"
          style={{
            width: 126,
            height: 37,
            top: 11,
            left: "50%",
            transform: "translateX(-50%)",
            background: "#000",
            zIndex: 50,
          }}
        />

        {/* Children */}
        <div className="absolute inset-0">{children}</div>

        {/* Home indicator */}
        <div
          className="absolute rounded-full"
          style={{
            width: 139,
            height: 5,
            bottom: 9,
            left: "50%",
            transform: "translateX(-50%)",
            background: dark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)",
            zIndex: 60,
          }}
        />
      </div>
    </div>
  );
};

export default IOSDevice;
