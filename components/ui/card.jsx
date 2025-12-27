"use client";

export function Card({ children, className = "" }) {
  return <div className={`rounded shadow-sm ${className}`.trim()}>{children}</div>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`${className}`.trim()}>{children}</div>;
}
