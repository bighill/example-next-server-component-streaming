import { Suspense } from "react";

interface Props {
  delay: number;
}

export const InitDelayedServerComponent: React.FC<Props> = ({ delay }) => {
  return (
    <div className="box">
      <p>
        <strong>Server</strong> component with {delay}ms delay
      </p>
      <p>Loading...</p>
    </div>
  );
};

const InitResult: React.FC<Props> = ({ delay }) => {
  return (
    <div className="box">
      <p>
        <strong>Server</strong> component with {delay}ms delay
      </p>
      <p>Loading...</p>
    </div>
  );
};

const DelayedResult: React.FC<Props> = ({ delay }) => {
  const data = getData(delay);

  return (
    <div className="box">
      <p>
        <strong>Server</strong> component with {delay}ms delay
      </p>
      <p className="accent">{data}</p>
    </div>
  );
};

export const DelayedServerComponentSuspense: React.FC<Props> = async ({
  delay,
}) => {
  return (
    <Suspense fallback={<InitResult delay={delay} />}>
      <DelayedResult delay={delay} />
    </Suspense>
  );
};

export const DelayedServerComponent: React.FC<Props> = ({ delay }) => {
  const data = getData(delay);

  return (
    <div className="box">
      <p>
        <strong>Server</strong> component with {delay}ms delay
      </p>
      <p className="accent">{data}</p>
    </div>
  );
};

/**
 * Fetch data from the API
 */
const getData = async (delay: number) => {
  const res = await fetch(`http://localhost:3000/api?delay=${delay}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  return data.foo;
};
