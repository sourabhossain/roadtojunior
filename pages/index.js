import Head from "next/head";

export default function Home() {
  return (
    <div id="app">
      <h1>Road to Become a Junior Developer</h1>
      <p>Details Coming Soon...</p>
      <style jsx>
        {`
          #app {
            display: flex;
            height: 90vh;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}
