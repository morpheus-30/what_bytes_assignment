//code for a dummy top navbar using jsx and tailwind css

import { Avatar, Button } from '@mui/material';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex flex-row w-screen justify-between p-10 border-b-2 border-gray-100'>
            <img src={"/images/logo.png"} alt="logo" className="" />
            <Button variant="outlined" color="primary" className="mr-8 mt-8 font-sans" sx={
                {
                    textTransform: 'none',
                    fontWeight: 'bold',
                    color: 'black',
                    fontSize: '1.5rem',
                    border: '3px solid lightgray',
                }
            }>
                <Avatar src='/images/user.jpg' alt="avatar" className="mr-2 " sx={
                    {
                        marginRight: '0.6rem',
                    }
                }/>
                <div>Rahil Siddiqui</div>
            </Button>
        </div>
    );
}

export default Navbar;