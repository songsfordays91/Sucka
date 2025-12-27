"use client";

export function Button({ children, className = "", variant, ...props }) {
  const base = "inline-flex items-center justify-center font-medium";
  const styles =
    variant === "outline"
      ? "border border-zinc-700 text-white bg-transparent hover:bg-zinc-900"
      : "bg-white/5 hover:bg-white/10 text-white";
  return (
    <button className={`${base} ${styles} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
}
