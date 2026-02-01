"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const OFFSET_PX = 3;
const BORDER_RADIUS = "8px";

interface ButtonPrimaryProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title?: string;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export const ButtonPrimary = React.forwardRef<HTMLButtonElement, ButtonPrimaryProps>(
  ({ onClick, title, className, disabled = false, children }, ref) => {
    const height = "2.5rem";
    
    const buttonStyle: React.CSSProperties = {
      height,
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
      backgroundColor: "var(--color-brand-orange)",
      color: "#ffffff",
      borderRadius: BORDER_RADIUS,
      fontSize: "0.875rem",
      fontWeight: 600,
      border: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
    };

    if (disabled) {
      return (
        <button
          ref={ref}
          onClick={onClick}
          disabled
          className={cn(
            "inline-flex items-center justify-center whitespace-nowrap transition-opacity cursor-not-allowed",
            className
          )}
          style={buttonStyle}
          title={title}
        >
          {children}
        </button>
      );
    }

    const bottomLayerStyle: React.CSSProperties = {
      position: "absolute",
      left: 0,
      right: 0,
      top: OFFSET_PX,
      height,
      borderRadius: BORDER_RADIUS,
      backgroundColor: "color-mix(in srgb, var(--color-brand-orange) 88%, black)",
      pointerEvents: "none",
    };

    return (
      <span
        className={cn("relative inline-flex", className)}
        style={{ height: `calc(${height} + ${OFFSET_PX}px)` }}
        aria-hidden
      >
        <span style={bottomLayerStyle} />
        <button
          ref={ref}
          onClick={onClick}
          disabled={false}
          className="relative z-[1] inline-flex items-center justify-center whitespace-nowrap transition-opacity"
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.9";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
          title={title}
        >
          {children}
        </button>
      </span>
    );
  }
);

ButtonPrimary.displayName = "ButtonPrimary";

interface ButtonSecondaryProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title?: string;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export const ButtonSecondary = React.forwardRef<HTMLButtonElement, ButtonSecondaryProps>(
  ({ onClick, title, className, disabled = false, children }, ref) => {
    const height = "2.5rem";

    const bottomLayerStyle: React.CSSProperties = {
      position: "absolute",
      left: 0,
      right: 0,
      top: OFFSET_PX,
      height,
      borderRadius: BORDER_RADIUS,
      backgroundColor: "color-mix(in srgb, #ffffff 88%, black)",
      pointerEvents: "none",
    };

    return (
      <span
        className={cn("relative inline-flex", className)}
        style={{ height: `calc(${height} + ${OFFSET_PX}px)` }}
        aria-hidden
      >
        <span style={bottomLayerStyle} />
        <button
          ref={ref}
          onClick={onClick}
          disabled={disabled}
          className={cn(
            "relative z-[1] inline-flex items-center justify-center whitespace-nowrap transition-colors",
            disabled && "cursor-not-allowed"
          )}
          style={{
            height,
            paddingLeft: "1rem",
            paddingRight: "1rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            backgroundColor: "#ffffff",
            color: "#000000",
            borderRadius: BORDER_RADIUS,
            fontSize: "0.875rem",
            fontWeight: 500,
            border: "none",
            cursor: disabled ? "not-allowed" : "pointer",
          }}
          onMouseEnter={(e) => {
            if (!disabled) {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
            }
          }}
          onMouseLeave={(e) => {
            if (!disabled) {
              e.currentTarget.style.backgroundColor = "#ffffff";
            }
          }}
          title={title}
        >
          {children}
        </button>
      </span>
    );
  }
);

ButtonSecondary.displayName = "ButtonSecondary";

interface ButtonGhostProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  title?: string;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export const ButtonGhost = React.forwardRef<HTMLButtonElement, ButtonGhostProps>(
  ({ onClick, title, className, disabled = false, children }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap transition-colors",
          "rounded-md border",
          "border-[rgba(255,255,255,0.3)]",
          "text-[rgba(240,240,240,0.877)]",
          "hover:border-[var(--color-editor-hover)]",
          "hover:bg-[#232323]",
          "hover:text-[var(--color-editor-hover)]",
          disabled && "opacity-50 cursor-not-allowed",
          disabled && "hover:border-[rgba(255,255,255,0.3)]",
          disabled && "hover:bg-transparent",
          disabled && "hover:text-[rgba(240,240,240,0.877)]",
          className
        )}
        style={{
          height: "2.5rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          borderRadius: "6px",
          fontSize: "0.875rem",
          fontWeight: 500,
          cursor: disabled ? "not-allowed" : "pointer",
        }}
        title={title}
      >
        {children}
      </button>
    );
  }
);

ButtonGhost.displayName = "ButtonGhost";
