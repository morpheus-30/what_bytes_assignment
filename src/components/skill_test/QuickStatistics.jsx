import { Avatar } from "@mui/material";
import React, { useState } from "react";

const QuickStatistics = ({
    rank,
    percentile,
    correctAns
}) => {
    return (
        <div>
            <div className='flex flex-row justify-between border-gray-200 w-[70vw] bp:w-[44vw] border-2 py-10 px-5 m-10 rounded-xl'>
                <div className='flex flex-col justify-start items-start'>
                    <div className='text-2xl font-bold mb-2'>Quick Statistics</div>
                    <div className="flex flex-row mt-5">
                        <Stat title="YOUR RANK" value={rank} isLast={false} imagePath={"/images/trophy.png"} />
                        <Stat title="PERCENTILE" value={percentile} isLast={false} imagePath={"/images/clipboard.png"} />
                        <Stat title="CORRECT ANSWERS" value={correctAns} isLast={true} imagePath={"/images/checkmark.png"} />


                    </div>
                </div>
            </div>
        </div>
    );
}

const Stat = ({ title, value, isLast, imagePath }) => {

    const [width, setWidth] = useState(window.innerWidth)

    window.addEventListener('resize', function (event) {
        setWidth(window.innerWidth)
    })
    return (<div id="icon+text" className={`flex flex-row mx-5 border-gray-200 ${isLast === false ? "border-r-2" : ""}`}>
        {width>910?<Avatar sx={{
            bgcolor: 'lightgray',
            padding: '0.5rem',
            width: '4rem',
            height: '4rem',

        }}>
            <img src={imagePath} className="w-7" alt="" />
        </Avatar>:null}
        <div className="flex flex-col mx-5">
            <div className='text-2xl font-bold text-wrap text-left'>
                {value}
            </div>
            <div className="text-gray-400 text-left">{title}</div>
        </div>

    </div>);
}

export default QuickStatistics;