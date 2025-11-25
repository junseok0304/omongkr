"use client";

import { useEffect, useState } from "react";

export default function UrlList() {
    const [list, setList] = useState<any[]>([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("shorty") || "[]").reverse();
        setList(data);
    }, []);

    return (
        <section className="url-list">
            {list.map((i, idx) => (
                <div key={idx} className="url-item">
                    <strong>{i.short}</strong>
                    <br />
                    <span style={{ color: "#666" }}>{i.url}</span>
                    {i.password && <div>🔐 비밀번호 설정됨</div>}
                </div>
            ))}
        </section>
    );
}
