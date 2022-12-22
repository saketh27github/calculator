import{useState} from 'react';

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*','+', '-'];

  // it is for operators first, values should be there like(4532) than operators and 2nd value(765)
  const updateCalc = value =>{
    if(
      ops.includes(value) && calc ==='' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ){
      return;
    }
    setCalc(calc + value);


    // it is for showing results
    if(!ops.includes(value)){
      setResult(eval(calc + value).toString());
    }
  }

  const createDigits = () =>{
    const digits = [];

    for(let i=1; i<10; i++){
      digits.push(
        <button onClick={() => updateCalc(i.toString())} 
           key={i}>{i}
           </button>
      )
    }
    return digits;
  }

  // it is for ""=" function
  const calculate =() =>{
    setCalc(eval(calc).toString());
  }

  // it is for Delete function
  const deleteLast = ()=>{
    if(calc == ''){
      return;
    }
    const value = calc.slice(0,-1);

    setCalc(value);

  }


  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ''}&nbsp;
          {calc || "0"}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>

          <button onClick={deleteLast}>DEL</button>
        </div>

        <div className="digits">
          {createDigits()}
            <button onClick={() => updateCalc('0')}>0</button>
            <button onClick={() => updateCalc('.')}>.</button>

            <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
