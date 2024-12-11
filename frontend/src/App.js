import React, { useEffect, useState } from "react";

function app() {
  const [msg, setMsg] = useState("");
  useEffect(() => {
    fetch("http://localhost:5555/api").then((res) => {
      res.json().then((data) => {
        setMsg(data.msg);
      });
    });
  }, []);
  return (
    <div>
      <h1>{msg}</h1>
    </div>
  );
}
