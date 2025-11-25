"use client";

export default function Tabs({
    active,
    onChange,
}: {
    active: string;
    onChange: (tab: string) => void;
}) {
    return (
        <div className="tabs">
            <div
                className={`tab ${active === "basic" ? "active" : ""}`}
                onClick={() => onChange("basic")}
            >
                🔗 기본 단축
            </div>
            <div
                className={`tab ${active === "password" ? "active" : ""}`}
                onClick={() => onChange("password")}
            >
                🔐 비밀번호 설정
            </div>
            <div
                className={`tab ${active === "custom" ? "active" : ""}`}
                onClick={() => onChange("custom")}
            >
                🛠️ 커스텀 주소
            </div>
        </div>
    );
}
