import { useState } from 'react';
import './App.css';

function App() {

  const [numone, setNumone] = useState('');
  const [numtwo, setNumtwo] = useState('');
  const [result, setResult] = useState('');


  const Add = () => {
    var n1 = parseInt(numone);
    var n2 = parseInt(numtwo);
    var sum = n1 + n2;
    setResult(sum);
  }
  return (
    <>
      {/* <div>
      <h1 data-testid="MyHeading">WELCOME TO JEST DEMO PROJECT</h1>
      <br>
      </br>
      <b data-testid="MyBold">James Bond</b>
    </div> */}

      <div>
        <h1 data-testid='Heading'>Addtion of Two Numbers</h1>
      </div> <br></br>
      <label data-testid='Label1'>Enter number 01:</label><input data-testid='TextBox1' value={numone} onChange={(e) => setNumone(e.target.value)} type='number' placeholder='Enter your first Number'></input><br></br>
      <label data-testid='Label2'>Enter number 02:</label><input data-testid='TextBox2' value={numtwo} onChange={(e) => setNumtwo(e.target.value)} type='number' placeholder='Enter your Second Number'></input><br></br>
      <button value="Additon" type='submit' onClick={Add} data-testid='AdditionButton'>Addtion</button>
      <br></br>
      <b data-testid='Result'>sum is :{result}</b>
    </>

  );
}

export default App;


