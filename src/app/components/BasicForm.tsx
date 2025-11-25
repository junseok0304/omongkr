
"use client";

import { useState } from "react";
import { saveUrl } from "@/app/lib/local";

export default function BasicForm() {
    const [url, setUrl] = useState("");

    const generate = () => {
        const chars =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let s = "";
        for (let i = 0; i < 6; i++) {
            s += chars[Math.floor(Math.random() * chars.length)];
        }
        return s;
    };

    const shortBasic = () => {
        if (!url.trim()) return;
        const code = generate();
        saveUrl(url, "omong.kr/" + code);
        setUrl("");
    };

    return (
        <div>
            <div className="input-row">
                <input
                    className="input"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="단축할 URL을 입력하세요"
                />
                <button className="btn-short" onClick={shortBasic}>
                    단축하기
                </button>
            </div>
        </div>
    );
}
