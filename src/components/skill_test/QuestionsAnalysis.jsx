import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const QuestionsAnalysis = ({ correctAns }) => {

    return <div>
        <div className='flex flex-row justify-between border-gray-200 border-2 w-[70vw] mob:w-[33vw] bp:w-[25vw] py-10 px-5 m-10 rounded-xl'>
            <div className='flex flex-col justify-start items-center'>
                <div className="flex flex-row justify-between w-full">
                    <div className='text-2xl font-bold'>
                        Questions Analysis
                    </div>
                    <div className="text-2xl font-normal">
                        {correctAns}/15
                    </div>

                </div>
                <div className="text-left text-xl mt-5">
                    You scored {correctAns} question correct out of 15 questions. However, you need to improve your score.
                </div>

                <div className="flex justify-center items-center">
                    <img src="/images/dart.png" className="absolute m-auto p-auto" width={50} />
                    <CircularProgress size={200} variant="determinate" value={correctAns/ 15 * 100} />
                </div>
            </div>
        </div>
    </div>;
}

export default QuestionsAnalysis;