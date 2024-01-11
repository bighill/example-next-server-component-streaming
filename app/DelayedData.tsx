"use client";

import { useEffect, useState } from "react";

interface Props {
  delay: number;
}

const DelayedData: React.FC<Props> = ({ delay }) => {
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

  // const getData = async (delay: number) => {
  //   return new Promise<string>((resolve) => {
  //     setTimeout(() => {
  //       resolve("Loaded.");
  //     }, delay);
  //   });
  // };

  // const data = getData(delay);

  return data ? <p className="accent">{data}</p> : <p>Loading...</p>;
};

export default DelayedData;
