import React from "react";
import { SeparatorProps } from "./Separator";

export const Separator: React.FC<SeparatorProps> = ({ hide }) => {
  if (hide) return null;
  return <div className="my-auto h-6 w-px bg-gray-300" />;
};
