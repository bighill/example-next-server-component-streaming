import Delayed from "@/client/Delayed";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>POC streaming server components</h1>
      <Delayed delay={1000} />
      <Delayed delay={2000} />
      <Delayed delay={3000} />
    </main>
  );
}
