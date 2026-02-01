"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const OFFSET_PX = 3;
const BORDER_RADIUS = "8px";

interface ButtonPrimaryLinkProps {
  href: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export function ButtonPrimaryLink({ href, title, className, children }: ButtonPrimaryLinkProps) {
  const height = "2.5rem";

  const linkStyle: React.CSSProperties = {
    height,
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
    backgroundColor: "var(--color-brand-orange)",
    color: "#ffffff",
    borderRadius: BORDER_RADIUS,
    fontSize: "0.875rem",
    fontWeight: 600,
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
  };

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
      className={cn("relative inline-flex group", className)}
      style={{ height: `calc(${height} + ${OFFSET_PX}px)` }}
    >
      <span style={bottomLayerStyle} />
      <Link
        href={href}
        className="relative z-[1] inline-flex items-center justify-center whitespace-nowrap transition-opacity group-hover:opacity-90"
        style={linkStyle}
        title={title}
      >
        {children}
      </Link>
    </span>
  );
}

interface ButtonSecondaryLinkProps {
  href: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export function ButtonSecondaryLink({ href, title, className, children }: ButtonSecondaryLinkProps) {
  const height = "2.5rem";

  const linkStyle: React.CSSProperties = {
    height,
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
    backgroundColor: "#ffffff",
    color: "#000000",
    borderRadius: BORDER_RADIUS,
    fontSize: "0.875rem",
    fontWeight: 500,
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
  };

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
      className={cn("relative inline-flex group", className)}
      style={{ height: `calc(${height} + ${OFFSET_PX}px)` }}
    >
      <span style={bottomLayerStyle} />
      <Link
        href={href}
        className="relative z-[1] inline-flex items-center justify-center whitespace-nowrap transition-colors group-hover:bg-[rgba(255,255,255,0.9)]"
        style={linkStyle}
        title={title}
      >
        {children}
      </Link>
    </span>
  );
}

interface ButtonGhostLinkProps {
  href: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export function ButtonGhostLink({ href, title, className, children }: ButtonGhostLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap transition-colors",
        "border",
        "border-[rgba(255,255,255,0.3)]",
        "text-[rgba(240,240,240,0.877)]",
        "hover:border-[var(--color-editor-hover)]",
        "hover:bg-[#232323]",
        "hover:text-[var(--color-editor-hover)]",
        className
      )}
      style={{
        height: "2.5rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        paddingTop: "0.75rem",
        paddingBottom: "0.75rem",
        borderRadius: "6px",
        fontSize: "0.875rem",
        fontWeight: 500,
        textDecoration: "none",
      }}
      title={title}
    >
      {children}
    </Link>
  );
}
