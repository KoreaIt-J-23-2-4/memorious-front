/* eslint-disable no-nested-ternary */
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import dayjs from "dayjs";
import { useRecoilValue } from "recoil";
import { rcChartStartDate, rcUserOnChartArray } from "../../store/atoms/chartAtoms";

function PulseChart({ chartData }) {
    const chartRef = useRef();
    const userList = useRecoilValue(rcUserOnChartArray);
    const start = useRecoilValue(rcChartStartDate);

    useEffect(() => {
        if (userList.length > 0 && chartData.length > 0) {
            const formatTime = d3.timeFormat("%m/%d");
            const w = 650;
            const h = 300;

            const startDate = dayjs().subtract(start, "month");
            const endDate = dayjs();

            const maxYValue = Math.max(...chartData.flat());

            const svg = d3.select(chartRef.current).attr("width", w).attr("height", h).style("background", "#fff").style("margin", 40).style("overflow", "visible");
            svg.selectAll("*").remove();

            const xScale = d3.scaleTime().domain([startDate, endDate]).range([0, w]);

            const yScale = d3
                .scaleLinear()
                .domain([0, maxYValue + 30])
                .range([h, 0]);

            const xAxis = d3.axisBottom(xScale).tickFormat(formatTime);
            const yAxis = d3
                .axisRight(yScale)
                .tickSize(w)
                .tickValues(d3.range(0, maxYValue + 31, 30));

            svg.append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 0 - 40)
                .attr("x", 0 - h / 2)
                .attr("dy", "1em")
                .style("text-anchor", "middle")
                .text("맥박");

            svg.append("g").attr("class", "grid").call(yAxis).selectAll("line").attr("stroke", "#dbdbdb");

            svg.selectAll(".domain").attr("stroke", "#ddd");
            svg.append("g").call(xAxis).attr("transform", `translate(0, ${h})`).selectAll("text").style("font-size", "8px");
            svg.append("g").call(yAxis);

            const generateLine = d3
                .line()
                .x((d, i) => xScale(startDate.add(i, "day")))
                .y(d => yScale(d))
                .curve(d3.curveCardinal);

            chartData.forEach((lineData, index) => {
                svg.append("path")
                    .data([lineData])
                    .attr("d", generateLine)
                    .attr("fill", "none")
                    .attr("stroke-width", 6)
                    .attr("stroke", `#${index % 4 === 0 ? "666666" : index % 4 === 1 ? "445D48" : index % 4 === 2 ? "e6a156" : "952323"}`)
                    .attr("stroke-dasharray", function () {
                        return this.getTotalLength();
                    })
                    .attr("stroke-dashoffset", function () {
                        return this.getTotalLength();
                    })
                    .transition()
                    .duration(500)
                    .ease(d3.easeLinear)
                    .attr("stroke-dashoffset", 0);
            });
        }
    }, [chartData]);

    return <svg ref={chartRef} />;
}

export default PulseChart;
