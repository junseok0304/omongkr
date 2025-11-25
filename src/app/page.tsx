"use client";

import { useState } from "react";
import Tabs from "./components/Tabs";
import BasicForm from "./components/BasicForm";
import PasswordForm from "./components/PasswordForm";
import CustomForm from "./components/CustomForm";
import UrlList from "./components/UrlList";

export default function Home() {
    const [active, setActive] = useState("basic");

    return (
        <main>
            <header>
                <div className="logo">🔗 Shorty</div>
                <button className="login-btn">관리자 로그인</button>
            </header>

            <section className="hero">
                <h1>
                    간편하고 강력한<br />URL 단축 솔루션
                </h1>
                <p>
                    복잡한 링크를 짧고 기억하기 쉬운 주소로 변환하세요. 비밀번호 설정과
                    커스텀 링크 기능을 제공합니다.
                </p>
            </section>

            <div className="form-container">
                <Tabs active={active} onChange={setActive} />

                {active === "basic" && <BasicForm />}
                {active === "password" && <PasswordForm />}
                {active === "custom" && <CustomForm />}
            </div>

            <UrlList />

            <footer>© 2025 Shorty.</footer>
        </main>
    );
}
