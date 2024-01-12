import { Suspense } from "react";
import DelayedComponent from "./DelayedComponent";
import DelayedComponentSuspense from "./DelayedComponentSuspense";

export default function ServerComponents() {
  return (
    <main>
      <p>Server components</p>

      <Suspense fallback={<p>Loading...</p>}>
        <DelayedComponent delay={3000} />
      </Suspense>

      {/* <DelayedComponentSuspense delay={3000} /> */}
    </main>
  );
}
