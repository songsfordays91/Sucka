"use client";

export function Textarea(props) {
  return (
    <textarea
      {...props}
      className={`w-full rounded-md border border-zinc-700 bg-transparent px-4 py-3 text-white placeholder:text-zinc-500 ${props.className || ""}`}
    />
  );
}
