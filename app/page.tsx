import DelayedComponent from "./DelayedComponent";

export default function Home() {
  return (
    <main>
      <p>
        These are client components that each have their own API fetch with
        simulated delay. This is an example of keeping client components small
        and at the leaf of the <em>tree</em> to maximize static/SSR code.
      </p>
      <DelayedComponent delay={1000} />
      <DelayedComponent delay={2000} />
      <DelayedComponent delay={3000} />
    </main>
  );
}
