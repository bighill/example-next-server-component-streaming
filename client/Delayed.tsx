"use client";

import useData from "@/hook/useData";

interface Props {
  delay: number;
}

const Delayed: React.FC<Props> = ({ delay }) => {
  return (
    <div className="box">
      <p>Component with {delay}ms delay</p>
      <p>{useData(delay) || "..."}</p>
    </div>
  );
};

export default Delayed;
