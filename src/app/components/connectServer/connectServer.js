import React from "react";
export default function connectServer(endpoint, body) {
  if (body) {
    return fetch(`https://localhost:7124/${endpoint}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
      credentials: "include",
    });
  } else {
    return fetch(`https://localhost:7124/${endpoint}`);
  }
}
