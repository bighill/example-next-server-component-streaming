import DelayedData from "@/app/DelayedData";

interface Props {
  delay: number;
}

export default function DelayedComponent({ delay }: Props) {
  return (
    <div className="box">
      <p>Client component with simulated delay</p>
      <DelayedData delay={delay} />
    </div>
  );
}
