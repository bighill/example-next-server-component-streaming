import DelayedComponent from "./DelayedComponent";

export default function Home() {
  return (
    <main>
      <h1>POC streaming server components</h1>

      <DelayedComponent delay={1000} />
      <DelayedComponent delay={2000} />
      <DelayedComponent delay={3000} />
    </main>
  );
}
