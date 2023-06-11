import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';


function App() {

  return (
    <div className="w-full h-auto bg-green-300 flex flex-col justify-start items-center ">

      <Navbar />
      <Main />

    </div>
  )
};

export default App;