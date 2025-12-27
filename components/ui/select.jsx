"use client";

import React from "react";

/**
 * Simple Select wrapper
 * props:
 *  - label (string)
 *  - options (array of {value,label})
 */
export function Select({ label, options = [], className = "" }) {
  return (
    <label className={`block w-full ${className}`}>
      {label && <div className="text-zinc-400 mb-2">{label}</div>}
      <select className="w-full rounded-md border border-zinc-700 bg-transparent px-4 py-3 text-white">
        <option value="">{label || "Select..."}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
