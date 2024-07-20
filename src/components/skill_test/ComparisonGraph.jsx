import { Avatar } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import React, { useEffect, useState } from "react";



const ComparisonGraph = ({ percentile }) => {

    const [oldPercentile, setOldPercentile] = React.useState(0);

    const [data, setData] = React.useState({
        0: 4,
        14: 5,
        26: 6,
        32: 7,
        44: 8,
        51: 9,
        68: 10,
        76: 11,
        80: 12,
        93: 13,
        100: 14
    });

    const [XAxisdata, setXAxisData] = React.useState([]);
    const [numberOfStudents, setNumberOfStudents] = React.useState([]);

    useEffect(() => {
        const XAxisData = Object.keys(data).map((key) => {
            return key;
        });
        setXAxisData(XAxisData);

        const numberOfStudents = Object.values(data).map((value) => {
            return value;
        });
        setNumberOfStudents(numberOfStudents);
    }, [data]);

    useEffect(() => {
        const dataCopy = { ...data };

        dataCopy[percentile] = dataCopy[percentile] ? dataCopy[percentile] + 1 : 1;

        if (dataCopy[oldPercentile] - 1 <= 0) {
            delete dataCopy[oldPercentile]
        } else {
            dataCopy[oldPercentile] = dataCopy[oldPercentile] - 1
        }

        setOldPercentile(percentile)
        setData(dataCopy);
    }
        , [percentile]);

    const calculateAveragePercentile = () => {
        let sum = 0;
        let total = 0;
        for (let key in data) {
            sum += parseInt(key) * data[key];
            total += data[key];
        }
        return Math.ceil(sum / total);
    }

    const [width, setWidth] = useState(window.innerWidth)

    window.addEventListener('resize', function (event) {
        setWidth(window.innerWidth)
    })

    return (
        <div>
            <div className='flex flex-row w-[70vw] bp:w-[44vw] justify-between border-gray-200 border-2 py-10 px-5 m-10 rounded-xl'>
                <div className='flex flex-col justify-start items-start'>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col items-start">
                            <div className='text-2xl font-bold mb-2'>Comparison  Graph</div>
                            <div className='text-xl mb-2  text-left'>You scored {percentile}% percentile which is lower than the average percentile {calculateAveragePercentile(data)}% of all the engineers who took this assessment</div>
                        </div>
                        <Avatar sx={{
                            bgcolor: 'lightgray',
                            padding: '0.5rem',
                            width: '4rem',
                            height: '4rem',

                        }}>
                            <img src={"/images/chart.png"} className="w-7" alt="" />
                        </Avatar>
                    </div>
                    <LineChart
                        xAxis={[{ data: XAxisdata, id: 'x-axis', name: 'Percentile', type: 'category', label: 'Percentile' }]}
                        series={[
                            {
                                data: numberOfStudents,
                                id: 'Number of Students',
                                name: 'Number of Students',
                                label: 'Number of Students',
                                type: 'line',
                            },
                        ]}
                        width={width>862?600:width/2}
                        height={300}
                    />


                </div>
            </div>
        </div>
    );
}

export default ComparisonGraph;