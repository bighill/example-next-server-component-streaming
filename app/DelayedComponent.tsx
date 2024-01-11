import DelayedData from "@/app/DelayedData";

interface Props {
  delay: number;
}

export default function DelayedComponent({ delay }: Props) {
  return (
    <div className="box">
      <p>Client component with {delay}ms delay</p>
      <DelayedData delay={delay} />
    </div>
  );
}
