const getData = async (delay: number) => {
  const res = await fetch(`http://localhost:3000/api?delay=${delay}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  return data.foo;
};

interface Props {
  delay: number;
}

const DelayedServerComp: React.FC<Props> = async ({ delay }) => {
  const data = await getData(delay);

  return (
    <div className="box">
      <p>Server component with {delay}ms delay</p>
      <p className="accent">{data}</p>
    </div>
  );
};

export default DelayedServerComp;
