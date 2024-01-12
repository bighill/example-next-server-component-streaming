interface Props {
  delay: number;
}

export default async function DelayedData({ delay }: Props) {
  //   const [data, setData] = useState("");

  //   useEffect(() => {
  //     const getData = async (delay: number) => {
  //       const res = await fetch(`/api?delay=${delay}`);
  //       if (!res.ok) {
  //         throw new Error("Something went wrong");
  //       }
  //       const data = await res.json();
  //       setData(data.foo);
  //     };
  //     getData(delay);
  //   }, []);

  //   return data ? <p className="accent">{data}</p> : <p>Loading...</p>;

  await new Promise((resolve) => setTimeout(resolve, delay));

  return "ahoy";
}
