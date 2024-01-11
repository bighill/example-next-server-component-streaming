import { Suspense } from "react";

import DelayedClientComponent from "@/client/DelayedClientComponent";
import {
  InitDelayedServerComponent,
  DelayedServerComponent,
  DelayedServerComponentSuspense,
} from "./DelayedServerComp";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>POC streaming server components</h1>

      {/* <Suspense fallback={<InitDelayedServerComponent delay={1000} />}>
        <DelayedServerComponent delay={1000} />
      </Suspense>
      <Suspense fallback={<InitDelayedServerComponent delay={2000} />}>
        <DelayedServerComponent delay={2000} />
      </Suspense>
      <Suspense fallback={<InitDelayedServerComponent delay={3000} />}>
        <DelayedServerComponent delay={3000} />
      </Suspense> */}

      <DelayedServerComponentSuspense delay={1000} />
      <DelayedServerComponentSuspense delay={2000} />
      <DelayedServerComponentSuspense delay={3000} />

      <DelayedClientComponent delay={1000} />
      <DelayedClientComponent delay={2000} />
      <DelayedClientComponent delay={3000} />
    </main>
  );
}
