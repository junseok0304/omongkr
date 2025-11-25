"use client";

import { useState } from "react";
import { saveUrl } from "@/app/lib/local";

export default function CustomForm() {
    const [url, setUrl] = useState("");
    const [key, setKey] = useState("");

    const shortCustom = () => {
        if (!url.trim() || !key.trim()) return;
        saveUrl(url, "omong.kr/" + key);
        setUrl("");
        setKey("");
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
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    placeholder="원하는 커스텀 주소"
                />
                <button className="btn-short" onClick={shortCustom}>
                    단축하기
                </button>
            </div>
        </div>
    );
}
