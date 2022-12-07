import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <div className="container">
        <h1>About this app</h1>
        <p>
          This is a <a href="https://docs.onflow.org/fcl">FCL-powered</a> app
          built on <a href="http://onflow.org">Flow</a>.
        </p>
        <p>This app shows how to:</p>
        <ul>
          <li>Authenticate a user on the Flow blockchain.</li>
          <li>
            Import a contract to let a user create a profile and query the
            blockchain for their data.
          </li>
          <li>
            Let a user modify their profile and mutate the blockchain to save
            changes.
          </li>
        </ul>
      </div>
    </div>
  );
}
