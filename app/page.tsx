import DelayedComponent from "./DelayedComponent";

export default function Home() {
  return (
    <main>
      <p>
        <a
          href="https://github.com/bighill/example-next-server-component-streaming"
          target="_blank"
        >
          Source code on Github
        </a>
      </p>
      <p>
        These are client components that each have their own API fetch with
        simulated delay. This is an example of keeping client components small
        and at the leaf of the <em>tree</em> to maximize static/SSR code.
      </p>
      <p>
        On load or refresh, the whole page should load quick and clean, without
        any layout shifting. Each client component will then load in their own
        time.
      </p>
      <DelayedComponent delay={1000} />
      <DelayedComponent delay={2000} />
      <DelayedComponent delay={3000} />
    </main>
  );
}
