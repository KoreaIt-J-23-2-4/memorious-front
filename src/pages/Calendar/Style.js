import { css } from "@emotion/react";

export const SMainContainer = css`
    width: 1102.13px;
    height: 100%;
`;

export const SScheduleText = (color, isDayAll) => css`
    background-color: ${isDayAll === 0 ? "transparent" : color};
    border-radius: 5px;
    color: ${isDayAll === 0 ? "black" : "white"};
    padding-right: 3px;
    padding-left: 4px;
    font-size: 15px;
`;

export const SBox = css`
    display: flex;
    align-items: center;
    cursor: pointer;
    :hover {
        background-color: #f1f3f4;
    }
    & > li {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; // 아래줄로 내려가는 것을 막기위해
        word-break: break-all;
        width: 157.44px;
    }
`;