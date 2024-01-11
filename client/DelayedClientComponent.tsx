"use client";

import { useEffect, useState } from "react";

interface Props {
  delay: number;
}

const DelayedClientComponent: React.FC<Props> = ({ delay }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const getData = async (delay: number) => {
      const res = await fetch(`/api?delay=${delay}`);
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();
      setData(data.foo);
    };
    getData(delay);
  }, []);

  return (
    <div className="box">
      <p>
        <strong>Client</strong> component with {delay}ms delay
      </p>
      {!data && <p>Loading...</p>}
      {data && <p className="accent">{data}</p>}
    </div>
  );
};

export default DelayedClientComponent;
