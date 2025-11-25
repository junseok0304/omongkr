"use client";

import { useState } from "react";
import { saveUrl } from "@/app/lib/local";

export default function PasswordForm() {
    const [url, setUrl] = useState("");
    const [pw, setPw] = useState("");

    const generate = () => {
        const chars =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let s = "";
        for (let i = 0; i < 6; i++) {
            s += chars[Math.floor(Math.random() * chars.length)];
        }
        return s;
    };

    const shortPw = () => {
        if (!url.trim() || !pw.trim()) return;
        const code = generate();
        saveUrl(url, "omong.kr/" + code, { password: pw });
        setUrl("");
        setPw("");
    };

    return (
        <div>
            <div className="input-row">
                <input
                    className="input"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="단축할 URL 입력"
                />
            </div>
            <div className="input-row">
                <input
                    className="input"
                    value={pw}
                    type="password"
                    onChange={(e) => setPw(e.target.value)}
                    placeholder="비밀번호 설정"
                />
                <button className="btn-short" onClick={shortPw}>
                    단축하기
                </button>
            </div>
        </div>
    );
}
