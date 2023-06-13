import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import { useEffect, useState } from 'react';
import GridLoader from 'react-spinners/GridLoader';


function App() {

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);

  return (
    <div className="w-full h-auto bg-green-300 absolute flex flex-col justify-start items-center ">

      {loader ? (
        <div className='w-screen h-screen flex justify-center items-center relative top-0 bg-white '>
          <GridLoader color="#1b1464" size={20} />
        </div>
      ) : (
        <>
          <Navbar />
          <Main />
        </>
      )}

    </div>
  )
};

export default App;