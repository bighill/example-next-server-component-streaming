"use client";

import useData from "@/hook/useData";

interface Props {
  delay: number;
}

const DelayedClientComp: React.FC<Props> = ({ delay }) => {
  return (
    <div className="box">
      <p>Client component with {delay}ms delay</p>
      <p className="accent">{useData(delay) || "..."}</p>
    </div>
  );
};

export default DelayedClientComp;
