import './App.css';
import SideNavbar from './components/SideNavbar';
import Navbar from './components/Navbar';
import CourseName from './components/skill_test/CourseName';
import QuickStatistics from './components/skill_test/QuickStatistics';
import ComparisonGraph from './components/skill_test/ComparisonGraph';
import SyllabusWiseAnalysis from './components/skill_test/SyllabusWiseAnalysis';
import QuestionsAnalysis from './components/skill_test/QuestionsAnalysis';
import React from 'react';

function App() {

  const [open, setOpen] = React.useState(false);
  const [currTab,setCurrTab] = React.useState(0);
  const handleClickOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  const [rank, setRank] = React.useState(0);

  const [percentile , setPercentile] = React.useState(0);

  const [correctAns, setCorrectAns] = React.useState(0);

  const handleSubmit = (rank, percentile, score) => {
      setRank(rank);
      setPercentile(percentile);
      setCorrectAns(score);
      handleClose();
  }


  return (
    <div className="App overflow-hidden">
      <Navbar />
      <div className='flex flex-row'>
        <SideNavbar setCurrTab={setCurrTab} currTab={currTab}/>
        <div className='flex flex-col items-start'>
          <div className='text-3xl font-bold mx-10 mt-10'>Skill Test</div>
          <div className='flex flex-col bp:flex-row '>
            <div className='flex flex-col items-start'>
              <CourseName open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} handleSubmit={handleSubmit} />
              <QuickStatistics rank={rank} correctAns={correctAns} percentile={percentile}/>
              <ComparisonGraph percentile={percentile} />
            </div>
            <div className='flex flex-col mob:flex-row bp:flex-col items-start'>
              <SyllabusWiseAnalysis />
              <QuestionsAnalysis correctAns={correctAns}/>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
