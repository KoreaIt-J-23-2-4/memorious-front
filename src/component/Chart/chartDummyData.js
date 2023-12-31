import dayjs from "dayjs";
import ChartTableFirstRowInput from "../ChartDetail/ChartFirstRowInput";
import ChartDetailAddBtn from "../ChartDetail/ChartDetailAddBtn";
import ChartDetailEditBtn from "../ChartDetail/ChartDetailEditBtn";

export const chartPeriodArray = ["1", "3", "6"];

export const tableColumns = [
    {
        key: 1,
        width: 100,
        title: "날짜",
        dataIndex: "date",
        onHeaderCell: () => ({ style: { background: "#6F6257", color: "#fffbf5", textAlign: "center", fontSize: "16px" } }),
        render: (t, r, i) => {
            if (i === 0) {
                return <ChartTableFirstRowInput type="date" />;
            }
            return t ? dayjs(t).format("YYYY-MM-DD") : dayjs().format("YYYY-MM-DD");
        },
    },
    {
        key: 2,
        width: 100,
        title: "수정",
        dataIndex: "buttons",
        onHeaderCell: () => ({ style: { background: "#6F6257", color: "#fffbf5", textAlign: "center", fontSize: "16px" } }),
        render: (t, r, i) => {
            return i === 0 ? <ChartDetailAddBtn /> : <ChartDetailEditBtn t={t} record={r} />;
        },
    },
    {
        key: 3,
        width: 100,
        title: "공복혈당",
        dataIndex: "fbs",
        onHeaderCell: () => ({ style: { background: "#6F6257", color: "#fffbf5", textAlign: "center", fontSize: "16px" } }),
        render: (t, r, i) => {
            if (i === 0) {
                return <ChartTableFirstRowInput type="fbs" />;
            }
            return t ? t.toLocaleString("ko-KR") : <></>;
        },
    },
    {
        key: 4,
        width: 100,
        title: "걸음수",
        dataIndex: "step",
        onHeaderCell: () => ({ style: { background: "#6F6257", color: "#fffbf5", textAlign: "center", fontSize: "16px" } }),
        render: (t, r, i) => {
            if (i === 0) {
                return <ChartTableFirstRowInput type="step" />;
            }
            return t ? t.toLocaleString("ko-KR") : <></>;
        },
    },
    {
        key: 5,
        width: 100,
        title: "맥박",
        dataIndex: "pulse",
        onHeaderCell: () => ({ style: { background: "#6F6257", color: "#fffbf5", textAlign: "center", fontSize: "16px" } }),
        render: (t, r, i) => {
            if (i === 0) {
                return <ChartTableFirstRowInput type="pulse" />;
            }
            return t ? t.toLocaleString("ko-KR") : "";
        },
    },
];
export const dummyTableData = [
    {
        date: "",
        buttons: "",
        fbs: "",
        step: "",
        pulse: "",
    },
];
