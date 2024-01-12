import DelayedData from "./DelayedData";

interface Props {
  delay: number;
}

export default function DelayedComponent({ delay }: Props) {
  return (
    <div className="box">
      <p>Server component with {delay}ms delay</p>
      <DelayedData delay={delay} />
    </div>
  );
}
