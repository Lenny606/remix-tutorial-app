import type { MetaFunction } from "@remix-run/node";
import {Link} from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
      <>
        <h1>Hello</h1>
        <a href={"/test"}> Go to test - send new request to server</a><br/>
        <Link to={"/test"}> Go to test without reload</Link>
      </>
  );
}

