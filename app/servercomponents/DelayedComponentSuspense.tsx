import { Suspense } from "react";
import DelayedData from "./DelayedData";

interface Props {
  delay: number;
}

export default function DelayedComponentSuspense({ delay }: Props) {
  return (
    <div className="box">
      <p>Server component using Suspense with {delay}ms delay</p>
      <Suspense fallback={<p>Loading...</p>}>
        <DelayedData delay={delay} />
      </Suspense>
    </div>
  );
}
