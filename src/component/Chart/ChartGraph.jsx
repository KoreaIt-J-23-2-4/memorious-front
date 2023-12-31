import React, { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import dayjs from "dayjs";
import FbsChart from "./FbsChart";
import { instance } from "../../config";
import { rcChartStartDate, rcUserOnChartArray } from "../../store/atoms/chartAtoms";
import StepChart from "./StepChart";
import PulseChart from "./PulseChart";
import { chartContainer, chartWrapper } from "./style";
/** @jsxImportSource @emotion/react */

function ChartGraph() {
    const userList = useRecoilValue(rcUserOnChartArray);
    const startDate = useRecoilValue(rcChartStartDate);
    const fbsRef = useRef();
    const [fbsData, setFbsData] = useState([]);
    const [stepData, setStepData] = useState([]);
    const [pulseData, setPulseData] = useState([]);

    const getChartData = async () => {
        const response = await instance.post("/api/chart/graph", { userList: [...userList.filter(user => user.checked).map(e => e.userId)], startDate: dayjs().subtract(startDate, "month") });
        const fbs = userList.map(user => {
            const userData = response.data[user.nickname];
            if (userData) {
                return Object.values(userData.fbs);
            }
            return [];
        });
        const step = userList.map(user => {
            const userData = response.data[user.nickname];
            if (userData) {
                return Object.values(userData.step);
            }
            return [];
        });
        const pulse = userList.map(user => {
            const userData = response.data[user.nickname];
            if (userData) {
                return Object.values(userData.pulse);
            }
            return [];
        });

        setFbsData(fbs);
        setStepData(step);
        setPulseData(pulse);
    };

    useEffect(() => {
        if (userList) {
            getChartData();
        }
    }, [userList, startDate]);

    return (
        <div css={chartContainer}>
            <div css={chartWrapper}>
                <div>
                    <FbsChart chartData={fbsData} />
                    <div ref={fbsRef} />
                </div>
                <div>
                    <StepChart chartData={stepData} />
                    <div />
                </div>
                <div>
                    <PulseChart chartData={pulseData} />
                    <div />
                </div>
            </div>
        </div>
    );
}

export default ChartGraph;
