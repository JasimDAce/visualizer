"use client";
import React from "react";
import { Button } from "./ui/moving-border";


export function Movingborder() {
  return (
    <a href="/database-schema-visualizer">
      <Button
        borderRadius="1.75rem"
        className="bg-black text-white border-slate-800 "
      >
        Get Started.
      </Button>
    </a>
  );
}
