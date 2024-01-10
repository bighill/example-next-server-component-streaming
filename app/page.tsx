import DelayedClientComp from "@/client/DelayedClientComp";
import DelayedServerComp from "./DelayedServerComp";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>POC streaming server components</h1>
      {/* <DelayedClientComp delay={1000} />
      <DelayedClientComp delay={2000} />
      <DelayedClientComp delay={3000} /> */}
      <DelayedServerComp delay={3000} />
    </main>
  );
}
