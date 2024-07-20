import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Avatar } from '@mui/material';

const CourseName = ({ handleClickOpen, open, handleClose ,handleSubmit}) => {
    return (
        <div>
            <div className='flex flex-row border-gray-200 w-[70vw] bp:w-[44vw] items-center  border-2 py-10 px-5 ml-10 mt-10 rounded-xl'>
                <img src="/images/html.png" alt="course" className="w-20 h-20" />
                <div className="flex flex-col justify-start items-start ml-5">
                    <div className='text-2xl font-bold mb-2 text-left'>Hyper Text Markup Language</div>
                    <div className='text-xl font-normal text-wrap text-left'>
                        Questions: 10 | Duration: 10 mins | Submitted on 10/10/2021
                    </div>
                </div>

                <FormDialog handleClickOpen={handleClickOpen} open={open} handleClose={handleClose} handleSubmit={handleSubmit}/>
            </div>
        </div>
    );


}

const FormDialog = ({ handleClickOpen, open, handleClose ,handleSubmit}) => {


    return (
        <React.Fragment>
            <Button variant="contained" color="primary" sx={
                {
                    marginLeft: '2rem',
                    backgroundColor: '#00025c',
                    fontWeight: 'bold',
                    height: '3rem',
                    paddingX: '2rem',
                    paddingY: '1rem',
                    borderRadius: '0.7rem',
                    fontStyle: 'normal',
                    textTransform: 'none',
                    fontSize: '1rem',
                }
            }
                onClick={handleClickOpen}>
                Update
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const rank = formJson.rank;
                        const percentile = formJson.percentile;
                        const score = formJson.score;
                        console.log(rank);
                        console.log(percentile);
                        console.log(score);
                        handleSubmit(rank, percentile, score);
                    },
                }}
            >

                <DialogTitle>Update Scores</DialogTitle>
                <DialogContent style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'stretch',
                }}>
                    <DialogContent style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        textAlign: 'center',
                        // width: '500px',
                    }}>
                        <Avatar sx={{ width: 40, height: 40, backgroundColor: '#00008b' }}>
                            1
                        </Avatar>
                        <DialogContentText style={{
                            marginright: '10rem',
                            // marginLeft: '10rem',

                        }}>
                            Update your Rank
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="rank"
                            name="rank"
                            label="Rank"

                            variant="outlined"
                        />
                    </DialogContent>
                    <DialogContent style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        textAlign: 'center',
                        // width: '500px',

                    }}>
                        <Avatar sx={{ width: 40, height: 40, backgroundColor: '#00008b' }}>
                            2
                        </Avatar>
                        <DialogContentText style={{
                            marginright: '10rem',
                            // marginLeft: '10rem',

                        }}>
                            Update your Percentile
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="percentile"
                            name="percentile"
                            label="Percentile"

                            variant="outlined"
                        />
                    </DialogContent>
                    <DialogContent style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        textAlign: 'center',
                        // width: '500px',

                    }}>
                        <Avatar sx={{ width: 40, height: 40, backgroundColor: '#00008b' }}>
                            3
                        </Avatar>
                        <DialogContentText style={{
                            marginRight: '5rem text-left',
                            // marginLeft: '10rem',

                        }}>
                            Update your Current Score(Out of 15)
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="score"
                            name="score"
                            label=""
                            
                            variant="outlined"
                        />
                    </DialogContent>
                </DialogContent>
                <DialogActions style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginRight: '2rem',
                    marginBottom: '2rem',
                }}>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" sx={
                {
                    marginLeft: '2rem',
                    backgroundColor: '#00025c',
                    fontWeight: 'bold',
                    height: '3rem',
                    paddingX: '2rem',
                    paddingY: '1rem',
                    borderRadius: '0.7rem',
                    fontStyle: 'normal',
                    textTransform: 'none',
                    fontSize: '1rem',
                }
            }><div className='text-white'>Update</div></Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default CourseName;