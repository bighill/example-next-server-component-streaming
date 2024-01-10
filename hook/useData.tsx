import { useState, useEffect } from "react";

const useData = (delay: number) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = setTimeout(() => {
      // Simulating an API call or any asynchronous operation
      const fetchedData = "Hello";
      setData(fetchedData);
    }, delay);

    return () => {
      clearTimeout(fetchData);
    };
  }, []);

  return data;
};

export default useData;
