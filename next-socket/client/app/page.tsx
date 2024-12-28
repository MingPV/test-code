"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [serverMessages, setServerMessages] = useState<string[]>([]);

  useEffect(() => {
    // สร้าง WebSocket connection
    const socket = new WebSocket("ws://localhost:5000");

    socket.onopen = () => {
      console.log("Connected to WebSocket server");
      socket.send("Hello from client!");
    };

    socket.onmessage = (event) => {
      console.log("Message from server: ", event.data);
      // รับข้อความจาก server และเพิ่มใน state
      setServerMessages((prevMessages) => [...prevMessages, event.data]);
    };

    socket.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };

    // ดึงข้อมูลจาก API ของ backend
    fetch("http://localhost:5000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));

    // clean up the WebSocket connection when the component unmounts
    return () => {
      socket.close();
    };
  }, []); // [] หมายความว่าใช้ useEffect เพียงครั้งเดียวในตอน mount

  return (
    <div>
      <h1>Welcome to the Fullstack Project!</h1>
      <p>{message || "Loading..."}</p>
      <h2>Real-time Messages from WebSocket Server:</h2>
      <ul>
        {serverMessages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}
