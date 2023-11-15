import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import { Reset } from "styled-reset";
import SidebarContainer from "../../component/Sidebar";
import { instance } from "../../config";
/** @jsxImportSource @emotion/react */

export const mainContainer = css`
    display: flex;
    justify-content: flex-start;
    min-width: 1300px;
    width: 75%;
    height: 100vh;
    margin: 0 auto;
    box-shadow:
        rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px;
    * {
        box-sizing: border-box;
        font-family: "Pretendard-Medium";
        font-size: 14px;
        pre {
            white-space: pre-wrap;
        }
    }
`;

const contentsContainer = css`
    width: 100%;
    max-width: 1300px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function SideBar() {
    const navigate = useNavigate();
    /* @라우팅 */
    useEffect(() => {
        instance
            .get("/api/auth/authenticate")
            .then(() => {})
            .catch(() => {
                navigate("/auth/oauth2/signup", { replace: false });
            });
    }, []);
    return (
        <>
            <Reset />
            <div id="parent-container" css={mainContainer}>
                <SidebarContainer />
                <div css={contentsContainer}>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default SideBar;
