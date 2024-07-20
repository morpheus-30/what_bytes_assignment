import React, { useState } from "react";
import { Grid, LinearProgress, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const SyllabusWiseAnalysis = () => {



    return <div>
        <div className='flex flex-row justify-between w-[70vw] mob:w-[33vw] bp:w-[25vw] border-gray-200 border-2 py-10 px-5 m-10 rounded-xl'>
            <div className='flex flex-col justify-start items-start'>
                <div className='text-2xl font-bold'>
                    Syllabus Wise Analysis
                </div>
                <div className='text-lg font-normal mt-10'>
                    HTML, Tools, Forms, History
                </div>
                <ProgressComponent name='HTML' percentage={50} myColor={"blue"} />
                <div className='text-lg font-normal mt-10'>
                    Tags & References in HTML
                </div>
                <ProgressComponent name='HTML' percentage={60} myColor={"red"} />
                <div className='text-lg font-normal mt-10'>
                    Tables & References in HTML
                </div>
                <ProgressComponent name='HTML' percentage={24} myColor={"orange"} />
                <div className='text-lg font-normal mt-10'>
                    Tables & CSS Basics
                </div>
                <ProgressComponent name='HTML' percentage={96} myColor={"green"} />
            </div>
        </div>
    </div>;
}

const ProgressComponent = ({ percentage, myColor }) => {

    const [width, setWidth] = useState(window.innerWidth)

    window.addEventListener('resize', function (event) {
        setWidth(window.innerWidth)
    })

    return <div className="flex flex-row">
        <LinearProgress variant="buffer" value={percentage} style={{
            width: `${width < 902 ? '50vw' : width>1500?'17vw':'20vw'}`,
            height: '1vh',
            borderRadius: '5px',
            marginTop: '10px',
            color: 'blue'
        }}
            sx={{
                "& .MuiLinearProgress-colorPrimary": {
                    backgroundColor: `lightgray`,
                },
                "& .MuiLinearProgress-barColorPrimary": {
                    backgroundColor: `${myColor}`,
                },
            }}
        />
        <div>
            <Typography variant="body2" color="textSecondary" style={
                {
                    marginLeft: '10px',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: `${myColor}`
                }
            }>{percentage}%</Typography>
        </div>
    </div>
}


export default SyllabusWiseAnalysis;