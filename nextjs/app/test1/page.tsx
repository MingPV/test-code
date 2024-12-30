"use client";

import { useEffect, useState } from "react";
import { sayHelloFromServer, sayHelloFromServerAfter2Sec } from "../actions";

export default function Page() {
  const [data, setData] = useState("");

  console.log("Hello from client");
  useEffect(() => {
    sayHelloFromServer();

    const sayHelloFromServer2 = async () => {
      let data = await sayHelloFromServerAfter2Sec();
      setData(data);
    };

    sayHelloFromServer2();
  }, []);

  return (
    <>
      <div>test1</div>
      <button onClick={sayHelloFromServer}>Say Hello</button>
      <button onClick={sayHelloFromServerAfter2Sec}>
        Say Hello After 2 secs
      </button>
      <div>data : {data}</div>
    </>
  );
}
