//code for a dummy side navbar with tailwind css
import { Button,  } from '@mui/material';
import React, { useState } from 'react';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';


const SideNavbar = ({ setCurrTab, currTab }) => {

    const [width, setWidth] = useState(window.innerWidth)

    window.addEventListener('resize', function (event) {
        setWidth(window.innerWidth)
    })
    return (

        <div className="flex flex-col justify-start border-r-2 w-auto  py-10 pr-2 h-[100vh] border-gray-200">
            <ul className="flex flex-col justify-start text-black mr-8 ">
                <Button variant="outlined" color="primary" sx={{
                    paddingTop: '0.5rem',
                    height: '5rem',
                    fontFamily: 'sans-serif',
                    fontStyle: 'normal',
                    paddingBottom: '0.5rem',
                    paddingRight: "5rem",
                    borderTopRightRadius: '40px',
                    marginBottom: '1rem',
                    borderBottomRightRadius: '40px',
                    border: '0px solid lightgray',
                    backgroundColor: currTab === 0 ? 'lightgray' : 'white',
                    ":hover": {
                        border: '0px solid lightgray',
                        backgroundColor: 'lightgray',
                    },

                }}
                    style={{
                        justifyContent: 'flex-start',
                        paddingLeft: '2rem',
                    }}
                    onClick={() => setCurrTab(0)}
                >
                    <div className='flex flex-row items-end'>
                        <EqualizerIcon sx={{
                            fontSize: '2rem',
                            margin: "0rem",
                            color: `${currTab === 0 ? "blue" : "gray"}`,
                        }} />
                        {width>1632?<div className={`text-2xl ml-3 text-${currTab === 0 ? "blue" : "gray"}-500 normal-case mb- font-bold`}>Dashboard</div>:null}
                    </div>
                </Button>
                <Button variant="outlined" color="primary" sx={{
                    paddingTop: '0.5rem',
                    height: '5rem',
                    fontFamily: 'sans-serif',
                    fontStyle: 'normal',
                    paddingBottom: '0.5rem',
                    paddingRight: "5rem",
                    borderTopRightRadius: '40px',
                    marginBottom: '1rem',
                    borderBottomRightRadius: '40px',
                    border: '0px solid lightgray',
                    backgroundColor: currTab === 1 ? 'lightgray' : 'white',
                    ":hover": {
                        border: '0px solid lightgray',
                        backgroundColor: 'lightgray',
                    },

                }}
                    onClick={() => setCurrTab(1)}
                    style={{
                        justifyContent: 'flex-start',
                        paddingLeft: '2rem',
                    }}
                >
                    <div className='flex flex-row items-end'>
                        <WorkspacePremiumIcon sx={{
                            fontSize: '2rem',
                            margin: "0rem",
                            color: `${currTab === 1 ? "blue" : "grey"}`,
                        }} />
                        {width>1632?<div className={`text-2xl ml-3 text-${currTab === 1 ? "blue" : "gray"}-500 normal-case mb- font-bold`}>Skill test</div>:null}
                        
                    </div>
                </Button>
                <Button variant="outlined" color="primary" sx={{
                    paddingTop: '0.5rem',
                    height: '5rem',
                    fontFamily: 'sans-serif',
                    fontStyle: 'normal',
                    paddingBottom: '0.5rem',
                    paddingRight: "5rem",
                    borderTopRightRadius: '40px',
                    marginBottom: '1rem',
                    borderBottomRightRadius: '40px',
                    border: '0px solid lightgray',
                    backgroundColor: currTab === 2 ? 'lightgray' : 'white',
                    ":hover": {
                        border: '0px solid lightgray',
                        backgroundColor: 'lightgray',
                    },

                }}
                    onClick={() => setCurrTab(2)}
                    style={{
                        justifyContent: 'flex-start',
                        paddingLeft: '2rem',
                    }}
                >
                    <div className='flex flex-row items-end'>
                        <InsertDriveFileIcon sx={{
                            fontSize: '2rem',
                            margin: "0rem",
                            color: `${currTab === 2 ? "blue" : "grey"}`,
                        }} />
                        {width>1632?<div className={`text-2xl ml-3 text-${currTab === 2 ? "blue" : "gray"}-500 normal-case mb- font-bold`}>Internship</div>:null}
                        
                    </div>
                </Button>
            </ul>
        </div>

    );
}

export default SideNavbar;