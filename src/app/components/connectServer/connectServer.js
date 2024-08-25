import React from "react";
export default function connectServer(endpoint, body) {
    if (body) {
        return fetch(`https://localhost:7124/api/getData/${endpoint}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(body),
        });
    } else {
        return fetch(`https://localhost:7124/api/getData/${endpoint}`);
    }
}